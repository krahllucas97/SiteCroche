/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Instagram, 
  MessageCircle, 
  ShoppingBag, 
  Mail, 
  Heart, 
  CheckCircle, 
  ArrowRight,
  Menu,
  X,
  Palette,
  ShoppingCart,
  Trash2,
  Plus,
  Minus
} from "lucide-react";
import { CrochetIllustration } from "./components/CrochetIllustration";
import { useState, useEffect, useMemo } from "react";

interface CartItem {
  cartId: string;
  productId: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  options: {
    color?: string;
    primaryColor?: string;
    secondaryColor?: string;
    size?: string;
    type?: string;
  };
}

const products = [
  {
    id: 1,
    name: "Top de Crochê Viscose",
    description: "Peça exclusiva tecida com linha 100% viscose. Possui caimento fluido, toque macio e acabamento em franjas que trazem movimento e elegância.",
    price: "R$ 120,00",
    priceValue: 120,
    image: "/Top.jpeg"
  },
  {
    id: 3,
    name: "Top Rede",
    description: "Top rede em crochê, moderno e versátil. Perfeito para sobreposições e looks de verão.",
    price: "R$ 80,00",
    priceValue: 80,
    image: "/Rosa.jpeg"
  },
  {
    id: 4,
    name: "Top Transversal",
    description: "Top transversal em crochê, com design moderno e ajuste perfeito ao corpo. Ideal para compor looks casuais e elegantes.",
    price: "R$ 55,00",
    priceValue: 55,
    image: "/TopBranco.png"
  },
  {
    id: 2,
    name: "Porta Copos",
    description: "Delicadeza em cada detalhe. Porta copos artesanais em crochê com design floral. Promoção: 3 unidades por apenas R$ 15,00!",
    price: "R$ 7,00 cada ou 3 por R$ 15,00",
    priceValue: 7,
    promoPriceValue: 15,
    image: "/PortaCopos.jpeg"
  },
  {
    id: 5,
    name: "Porta Copos Liso",
    description: "Porta Copos Liso",
    price: "R$ 7,00 cada ou 3 por R$ 15,00",
    priceValue: 7,
    promoPriceValue: 15,
    image: "/PortaCoposLiso.png"
  }
];

const encantoColors = [
  "8176 - OFF-WHITE",
  "7650 - AMÊNDOA",
  "7119 - AREIA CLARA",
  "7059 - SÂNDALO",
  "1289 - CANÁRIO",
  "7122 - OURO LÍQUIDO",
  "1013 - CAPIM DOURADO",
  "7326 - OURO VELHO",
  "7577 - OURO",
  "7031 – LICOR",
  "3528 - CARMIM",
  "3794 - BORDÔ",
  "7154 - SAIBRO",
  "7852 - MARMELADA",
  "7382 - CHOCOLATE",
  "7147 - EXPRESSO",
  "6802 - MALVA",
  "3201 - CAMAFEU",
  "3420 - LUXO",
  "3754 – ROSA PINK",
  "2307 - MARÉ",
  "2550 - AZUL BIC",
  "5745 - EUCALIPTO",
  "5105 - SÁLVIA",
  "5767 - BANDEIRA",
  "5398 - MUSGO",
  "8473 - ALUMÍNIO",
  "8990 - PRETO",
  "9818 - NATALINA",
  "9070 - GUIRLANDA",
  "9055 - ESTRELA",
  "9053 - SINOS",
  "9777 - CHAMPAGNE",
  "9390 - SAVANA",
  "9926 - SCARLET"
];

const charmeColors = [
  "8001 - BRANCO",
  "8176 - OFF-WHITE",
  "20 - NATURAL",
  "7684 - PORCELANA",
  "7563 - CHANTILLY",
  "7625 - CASTANHA",
  "7713 - LENHA",
  "7154 - SAIBRO",
  "7504 - MOGNO",
  "7311 - TABACO",
  "1114 - AMARELO CANDY",
  "1236 - LIMA",
  "1779 - AMARELO-CÍTRICO",
  "1289 - CANÁRIO",
  "7030 - MOSTARDA",
  "4146 - GEMA",
  "3047 - SOPRO",
  "4456 - LARANJA",
  "4445 - TANGERINA",
  "7371 - CARAMELO",
  "3227 - ROSA ANTIGO",
  "3526 - ROSA CANDY",
  "3128 - CUPIDO",
  "3182 - PITAYA",
  "3201 - CAMAFEU",
  "4004 - CORAL VIVO",
  "3048 - FLAMINGO",
  "6156 - TUTTI-FRUTTI",
  "3754 - ROSA PINK",
  "3611 - RUBI",
  "3581 - PIMENTA",
  "3402 - VERMELHO CÍRCULO",
  "3480 - DEVOÇÃO",
  "3794 - BORDÔ",
  "6567 - ROXO-CÍTRICO",
  "6006 - LILÁS CANDY",
  "2204 - VERDE CANDY",
  "5556 - TIFFANY",
  "2012 - AZUL CANDY",
  "2194 - TURQUESA",
  "2829 - AZUL BIC",
  "2931 - NÁUTICO",
  "2856 - ANIL PROFUNDO",
  "5583 - VERDE-LIMÃO",
  "5203 - GREENERY",
  "5947 - VERDE-CÍTRICO",
  "5606 - VERDE ORÉGANO",
  "5767 - BANDEIRA",
  "5164 - VERDE-ARBUSTO",
  "8008 - PEDREIRA",
  "8336 - CHUMBO",
  "8990 - PRETO",
  "9184# - SEREIA",
  "9337 - MARSHMALLOW",
  "9278 - LHAMA",
  "9153# - CABARÉ",
  "9368# - RAIO DE SOL",
  "9392# - FOLHA",
  "8736 - ÍNDIGO"
];

const amigurumiColors = [
  "8001 - BRANCO",
  "8176 - OFF-WHITE",
  "20 - NATURAL",
  "3061 - GARDÊNIA",
  "7564 - PORCELANA",
  "7563 - CHANTILLY",
  "7650 - AMÊNDOA",
  "7625 - CASTANHA",
  "7066 - PEDRA QUENTE",
  "7603 - CASTOR",
  "7713 - LENHA",
  "7567 - CACAU",
  "7569 - BRIGADEIRO",
  "7400 - BROWNIE",
  "7220 - TÂMARA",
  "7148 - CRAFT",
  "7077 - DOCE DE LEITE",
  "7030 - MOSTARDA",
  "7076 - CARAMELITO",
  "7072 - CENTEIO",
  "1112 - CREME",
  "1730 - AMARELO-CANDY",
  "1317 - SOLAR",
  "1205 - MAGNÓLIA",
  "1289 - CANÁRIO",
  "4146 - GEMA",
  "4131 - DARK CHEDDAR",
  "4095 - RUM",
  "4448 - TIJOLO",
  "4093 - TAFETÁ",
  "4171 - TROPICÁLIA",
  "4168 - DÁLIA",
  "4456 - LARANJA",
  "4445 - TANGERINA",
  "3583 - CEREJA",
  "3402 - VERMELHO-CÍRCULO",
  "3528 - CARMIM",
  "7078 - PIMENTA ROSA",
  "7136 - MARSALA",
  "3611 - RUBI",
  "3951 - VIVA MAGENTA",
  "3754 - ROSA PINK",
  "3334 - TULIPA",
  "3048 - FLAMINGO",
  "3182 - PITAYA",
  "3131 - CHICLETE",
  "3077 - QUARTZO",
  "3046 - DOÇURA",
  "3148 - MACADÂMIA",
  "4224 - PEACH FUZZ",
  "3047 - SOPRO",
  "4092 - ORGANZA",
  "4094 - CETIM",
  "3201 - CAMAFEU",
  "3157 - ROSEIRA",
  "6161 - VIOLETA",
  "6802 - MALVA",
  "6006 - LILÁS-CANDY",
  "6399 - AZALEIA",
  "6034 - REALEZA",
  "6614 - ALFAZEMA",
  "3154 - VINHO",
  "6030 - MÍSTICO",
  "6201 - TECNO",
  "2931 - NÁUTICO",
  "2930 - NETUNO",
  "2927 - AQUÁRIO",
  "2012 - AZUL-CANDY",
  "2137 - HORTÊNSIA",
  "2500 - ACQUA",
  "2194 - TURQUESA",
  "2618 - PLANETA",
  "2829 - AZUL-BIC",
  "2745 - MARINHEIRO",
  "2856 - ANIL-PROFUNDO",
  "5073 - PETRÓLEO",
  "5076 - HERA",
  "5398 - MUSGO",
  "5767 - BANDEIRA",
  "5669 - TIFFANY",
  "5091 - CELESTE",
  "5743 - NEO MINT",
  "2204 - VERDE-CANDY",
  "5741 - PERIQUITO",
  "5806 - LIMONADA",
  "5583 - VERDE LIMÃO",
  "5203 - GREENERY",
  "5800 - PISTACHE",
  "5089 - SELVA",
  "5368 - MILITAR",
  "5083 - ECO",
  "5745 - EUCALIPTO",
  "8013 - GLACIAL",
  "8008 - PEDREIRA",
  "8797 - AÇO",
  "8069 - MATRIX",
  "8990 - PRETO",
  "8736 - ÍNDIGO",
  "9278 - Lhama",
  "9534 - Unicórnio"
];

const sizes = ["PP", "P", "M", "G", "GG"];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  
  const [selectedTopColor, setSelectedTopColor] = useState("");
  const [selectedTopSize, setSelectedTopSize] = useState("");
  const [selectedTopRedeSize, setSelectedTopRedeSize] = useState("");
  const [selectedTopRedeColor, setSelectedTopRedeColor] = useState("");
  const [selectedTopTransversalSize, setSelectedTopTransversalSize] = useState("");
  const [selectedTopTransversalColor, setSelectedTopTransversalColor] = useState("");
  const [selectedPortaCoposType, setSelectedPortaCoposType] = useState("Unidade");
  const [selectedPortaCoposQuantity, setSelectedPortaCoposQuantity] = useState(0);
  const [selectedPortaCoposPrimaryColor, setSelectedPortaCoposPrimaryColor] = useState("");
  const [selectedPortaCoposSecondaryColor, setSelectedPortaCoposSecondaryColor] = useState("");

  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cart]);

  const cartCount = useMemo(() => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  }, [cart]);

  const addToCart = (product: typeof products[0], options: any, quantity: number = 1) => {
    let price = product.priceValue;
    if ((product.id === 2 || product.id === 5) && options.type === "Conjunto (3 un)") {
      price = product.promoPriceValue!;
    }

    const cartId = `${product.id}-${JSON.stringify(options)}`;
    
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.cartId === cartId);
      if (existingItem) {
        return prevCart.map(item => 
          item.cartId === cartId 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      return [...prevCart, {
        cartId,
        productId: product.id,
        name: product.name,
        price,
        quantity,
        image: product.image,
        options
      }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (cartId: string) => {
    setCart(prevCart => prevCart.filter(item => item.cartId !== cartId));
  };

  const updateQuantity = (cartId: string, delta: number) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.cartId === cartId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const checkoutViaWhatsApp = () => {
    if (cart.length === 0) return;

    let message = "Olá! Gostaria de fazer o seguinte pedido:\n\n";
    
    cart.forEach(item => {
      message += `*${item.name}*\n`;
      if (item.options.color) message += `- Cor: ${item.options.color}\n`;
      if (item.options.primaryColor) message += `- Cor Principal: ${item.options.primaryColor}\n`;
      if (item.options.secondaryColor) message += `- Cor Secundária: ${item.options.secondaryColor}\n`;
      if (item.options.size) message += `- Tamanho: ${item.options.size}\n`;
      if (item.options.type) message += `- Opção: ${item.options.type}\n`;
      message += `- Quantidade: ${item.quantity}\n`;
      message += `- Subtotal: R$ ${item.price * item.quantity},00\n\n`;
    });

    message += `*Total do Pedido: R$ ${cartTotal},00*`;
    
    window.open(`https://wa.me/5551996113728?text=${encodeURIComponent(message)}`, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Coleção", href: "#colecao" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <div className="min-h-screen selection:bg-accent-rose selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-bg-secondary/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#inicio" className="font-serif text-2xl font-bold tracking-tighter text-text-mocha">
            Valentina Petry
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium hover:text-accent-rose transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:text-accent-rose transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-rose text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:text-accent-rose transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-rose text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-bg-secondary absolute top-full left-0 w-full py-6 px-6 shadow-lg border-t border-accent-rose/10"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium hover:text-accent-rose transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center linen-texture pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-light mb-6 leading-tight">
              Valentina <br />
              <span className="text-accent-rose">Petry</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-mocha/80 mb-10 max-w-md font-light">
              Peças em crochê feitas à mão com amor e delicadeza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#colecao" 
                className="bg-accent-rose text-white px-8 py-4 rounded-full text-center font-medium hover:bg-accent-rose/90 transition-all shadow-lg shadow-accent-rose/20 flex items-center justify-center gap-2 group"
              >
                Ver Coleção
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[48px] overflow-hidden shadow-xl transition-all duration-700">
              <CrochetIllustration />
            </div>
            {/* Very subtle decorative glows */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-sage/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-rose/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>


      {/* Portfolio / Shop Gallery */}
      <section id="colecao" className="py-16 linen-texture">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl mb-4">Minha Coleção</h2>
            <p className="text-text-mocha/60 max-w-2xl mx-auto">
              Explore nossas peças exclusivas, feitas com os melhores fios e acabamento impecável.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-bg-secondary rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-accent-rose">
                    {product.price}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg mb-6 font-bold">{product.name}</h3>
                  
                  {(product.id === 1 || product.id === 3 || product.id === 4) && (
                    <div className="mb-6 space-y-4">
                      {product.id === 1 && (
                        <a 
                          href="https://www.circulo.com.br/produtos/croche/encanto" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accent-rose text-sm font-bold hover:opacity-80 transition-opacity"
                        >
                          <Palette className="w-4 h-4" />
                          Ver Cores Disponíveis (Linha Encanto)
                        </a>
                      )}

                      {(product.id === 3 || product.id === 4) && (
                        <a 
                          href="https://www.circulo.com.br/produtos/croche/charme" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accent-rose text-sm font-bold hover:opacity-80 transition-opacity"
                        >
                          <Palette className="w-4 h-4" />
                          Ver Cores Disponíveis (Linha Charme)
                        </a>
                      )}

                      {product.id === 1 && (
                        <div>
                          <label htmlFor="color-select-encanto" className="block text-xs font-bold text-text-mocha/60 uppercase mb-2">
                            Selecione a Cor:
                          </label>
                          <select 
                            id="color-select-encanto"
                            value={selectedTopColor}
                            onChange={(e) => setSelectedTopColor(e.target.value)}
                            className="w-full bg-bg-warm border border-accent-rose/20 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-accent-rose/50 appearance-none cursor-pointer"
                          >
                            <option value="">Escolha uma cor...</option>
                            {encantoColors.map(color => (
                              <option key={color} value={color}>{color}</option>
                            ))}
                          </select>
                        </div>
                      )}

                      {(product.id === 3 || product.id === 4) && (
                        <div>
                          <label htmlFor={`color-select-charme-${product.id}`} className="block text-xs font-bold text-text-mocha/60 uppercase mb-2">
                            Selecione a Cor:
                          </label>
                          <select 
                            id={`color-select-charme-${product.id}`}
                            value={product.id === 3 ? selectedTopRedeColor : selectedTopTransversalColor}
                            onChange={(e) => product.id === 3 ? setSelectedTopRedeColor(e.target.value) : setSelectedTopTransversalColor(e.target.value)}
                            className="w-full bg-bg-warm border border-accent-rose/20 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-accent-rose/50 appearance-none cursor-pointer"
                          >
                            <option value="">Escolha uma cor...</option>
                            {charmeColors.map(color => (
                              <option key={color} value={color}>{color}</option>
                            ))}
                          </select>
                        </div>
                      )}

                      <div>
                        <label className="block text-xs font-bold text-text-mocha/60 uppercase mb-2">
                          Selecione o Tamanho:
                        </label>
                        <div className="flex gap-2">
                          {sizes.map((size) => (
                            <button
                              key={size}
                              onClick={() => {
                                if (product.id === 1) setSelectedTopSize(size);
                                else if (product.id === 3) setSelectedTopRedeSize(size);
                                else if (product.id === 4) setSelectedTopTransversalSize(size);
                              }}
                              className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                (product.id === 1 ? selectedTopSize : (product.id === 3 ? selectedTopRedeSize : selectedTopTransversalSize)) === size 
                                  ? "bg-accent-rose text-white shadow-md" 
                                  : "bg-bg-warm text-text-mocha/60 border border-accent-rose/10 hover:border-accent-rose/30"
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {(product.id === 2 || product.id === 5) && (
                    <div className="mb-6 space-y-4">
                      <a 
                        href="https://www.circulo.com.br/produtos/amigurumi/amigurumi?gad_source=1&gad_campaignid=20993915473&gbraid=0AAAAADz8I-ZV-IHF-9USUVGJVworDtOSf&gclid=Cj0KCQjwm6POBhCrARIsAIG58CLYtKxc92ngq9wV8mrpVBBvpHKLkPZtscfi0A-uj06gjXO9OMDdgRQaAk9fEALw_wcB" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent-rose text-sm font-bold hover:opacity-80 transition-opacity"
                      >
                        <Palette className="w-4 h-4" />
                        Ver Cores Disponíveis (Linha Amigurumi)
                      </a>

                      <div>
                        <label className="block text-xs font-bold text-text-mocha/60 uppercase mb-2">
                          Selecione a Opção:
                        </label>
                        <div className="flex gap-2">
                          {["Unidade", "Conjunto (3 un)"].map((type) => (
                            <button
                              key={type}
                              onClick={() => {
                                setSelectedPortaCoposType(type);
                                setSelectedPortaCoposQuantity(0);
                              }}
                              className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                selectedPortaCoposType === type 
                                  ? "bg-accent-rose text-white shadow-md" 
                                  : "bg-bg-warm text-text-mocha/60 border border-accent-rose/10 hover:border-accent-rose/30"
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="color-select-primary" className="block text-xs font-bold text-text-mocha/60 uppercase mb-2">
                          Cor Principal (Obrigatório):
                        </label>
                        <select 
                          id="color-select-primary"
                          value={selectedPortaCoposPrimaryColor}
                          onChange={(e) => setSelectedPortaCoposPrimaryColor(e.target.value)}
                          className="w-full bg-bg-warm border border-accent-rose/20 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-accent-rose/50 appearance-none cursor-pointer"
                        >
                          <option value="">Escolha a cor principal...</option>
                          {amigurumiColors.map(color => (
                            <option key={color} value={color}>{color}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="color-select-secondary" className="block text-xs font-bold text-text-mocha/60 uppercase mb-2">
                          Cor Secundária (Opcional):
                        </label>
                        <select 
                          id="color-select-secondary"
                          value={selectedPortaCoposSecondaryColor}
                          onChange={(e) => setSelectedPortaCoposSecondaryColor(e.target.value)}
                          className="w-full bg-bg-warm border border-accent-rose/20 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-accent-rose/50 appearance-none cursor-pointer"
                        >
                          <option value="">Nenhuma (Cor única)</option>
                          {amigurumiColors.map(color => (
                            <option key={color} value={color}>{color}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="quantity-select" className="block text-xs font-bold text-text-mocha/60 uppercase mb-2">
                          Quantidade:
                        </label>
                        <select 
                          id="quantity-select"
                          value={selectedPortaCoposQuantity}
                          onChange={(e) => setSelectedPortaCoposQuantity(Number(e.target.value))}
                          className="w-full bg-bg-warm border border-accent-rose/20 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-accent-rose/50 appearance-none cursor-pointer"
                        >
                          <option value="0">Escolha a quantidade...</option>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                            <option key={num} value={num}>{num} {selectedPortaCoposType === "Unidade" ? (num === 1 ? "unidade" : "unidades") : (num === 1 ? "conjunto" : "conjuntos")}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  <button 
                    onClick={() => {
                      if (product.id === 1) {
                        addToCart(product, { color: selectedTopColor, size: selectedTopSize });
                      } else if (product.id === 3) {
                        addToCart(product, { color: selectedTopRedeColor, size: selectedTopRedeSize });
                      } else if (product.id === 4) {
                        addToCart(product, { color: selectedTopTransversalColor, size: selectedTopTransversalSize });
                      } else if (product.id === 2 || product.id === 5) {
                        addToCart(product, { 
                          type: selectedPortaCoposType, 
                          primaryColor: selectedPortaCoposPrimaryColor,
                          secondaryColor: selectedPortaCoposSecondaryColor || "Nenhuma"
                        }, selectedPortaCoposQuantity);
                      } else {
                        addToCart(product, {});
                      }
                    }}
                    disabled={
                      (product.id === 1 && (!selectedTopColor || !selectedTopSize)) ||
                      (product.id === 3 && (!selectedTopRedeColor || !selectedTopRedeSize)) ||
                      (product.id === 4 && (!selectedTopTransversalColor || !selectedTopTransversalSize)) ||
                      ((product.id === 2 || product.id === 5) && (selectedPortaCoposQuantity === 0 || !selectedPortaCoposPrimaryColor))
                    }
                    className={`w-full py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                      ((product.id === 1 && (!selectedTopColor || !selectedTopSize)) || (product.id === 3 && (!selectedTopRedeColor || !selectedTopRedeSize)) || (product.id === 4 && (!selectedTopTransversalColor || !selectedTopTransversalSize)) || ((product.id === 2 || product.id === 5) && (selectedPortaCoposQuantity === 0 || !selectedPortaCoposPrimaryColor)))
                        ? "bg-text-mocha/10 text-text-mocha/40 cursor-not-allowed shadow-none"
                        : "bg-accent-rose text-white hover:bg-accent-rose/90 shadow-accent-rose/20"
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    {((product.id === 1 && (!selectedTopColor || !selectedTopSize)) || (product.id === 3 && (!selectedTopRedeColor || !selectedTopRedeSize)) || (product.id === 4 && (!selectedTopTransversalColor || !selectedTopTransversalSize)) || ((product.id === 2 || product.id === 5) && (selectedPortaCoposQuantity === 0 || !selectedPortaCoposPrimaryColor)))
                      ? "Selecione as opções"
                      : "Adicionar ao Carrinho"}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders Highlight Section */}
      <section className="py-24 bg-accent-sage/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            {...fadeIn}
            className="grid md:grid-cols-2 gap-16 items-center bg-accent-beige rounded-[48px] p-8 md:p-16 shadow-xl shadow-accent-rose/5 border border-accent-rose/10"
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl">
                <img 
                  src="/Capa.jpeg" 
                  alt="Custom crochet work" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent-sage text-white p-6 rounded-2xl shadow-xl flex items-center gap-3">
                <Heart className="w-6 h-6 fill-current" />
                <span className="font-serif italic text-lg">Feito 100% à mão</span>
              </div>
            </div>
            
            <div>
              <span className="text-accent-rose font-bold uppercase tracking-widest text-sm mb-4 block">Exclusividade</span>
              <h2 className="text-4xl md:text-5xl mb-6 font-serif italic">Encomendas Personalizadas</h2>
              <p className="text-text-mocha/70 text-lg mb-8 leading-relaxed">
                Tem uma ideia especial? Faço peças sob medida com as cores e fios de sua preferência. 
                Seja um modelo que você viu e amou ou uma criação totalmente nova, estou aqui para transformar seu desejo em arte tecida.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-text-mocha/80">
                  <CheckCircle className="w-5 h-5 text-accent-sage" />
                  <span>Cores e fios personalizados</span>
                </div>
                <div className="flex items-center gap-3 text-text-mocha/80">
                  <CheckCircle className="w-5 h-5 text-accent-sage" />
                  <span>Medidas exatas para você</span>
                </div>
                <div className="flex items-center gap-3 text-text-mocha/80">
                  <CheckCircle className="w-5 h-5 text-accent-sage" />
                  <span>Prazo de produção: 15 a 20 dias úteis</span>
                </div>
              </div>
              <a 
                href="https://wa.me/5551996113728?text=Olá! Gostaria de conversar sobre uma encomenda personalizada." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-accent-rose text-white px-10 py-5 rounded-full font-bold hover:bg-accent-rose/90 transition-all shadow-lg shadow-accent-rose/20 group"
              >
                <MessageCircle className="w-6 h-6" />
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slow Fashion Section - High Evidence */}
      <section className="py-32 bg-text-mocha relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-rose blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent-sage blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            {...fadeIn}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-accent-rose font-bold uppercase tracking-[0.3em] text-xs mb-8 block">Manifesto</span>
            <h2 className="text-5xl md:text-8xl mb-12 font-serif italic text-bg-warm leading-tight">Slow Fashion</h2>
            <p className="text-white/80 text-xl md:text-3xl mb-20 leading-relaxed font-light italic">
              "Valorizamos o tempo, a qualidade e a ética. Cada peça é produzida individualmente, 
              respeitando o ritmo do fazer manual e garantindo uma moda mais sustentável, consciente e duradoura."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-accent-rose">
                  <Heart className="w-10 h-10 fill-current" />
                </div>
                <h3 className="text-bg-warm font-serif italic text-2xl">Artesanato com Alma</h3>
                <p className="text-white/40 text-sm">Cada ponto carrega uma história e dedicação única.</p>
              </div>
              <div className="space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-accent-sage">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-bg-warm font-serif italic text-2xl">Produção Ética</h3>
                <p className="text-white/40 text-sm">Respeito ao meio ambiente e ao tempo do artesão.</p>
              </div>
              <div className="space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-accent-rose">
                  <Palette className="w-10 h-10" />
                </div>
                <h3 className="text-bg-warm font-serif italic text-2xl">Peças Únicas</h3>
                <p className="text-white/40 text-sm">Exclusividade que foge da produção em massa.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            {...fadeIn}
            className="bg-bg-warm rounded-[40px] p-12 md:p-20 text-center"
          >
            <h2 className="text-4xl md:text-5xl mb-16">Como Encomendar</h2>
            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 text-accent-rose">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">1. Escolha sua peça</h4>
                <p className="text-text-mocha/60">Navegue pela coleção e escolha o modelo que mais combina com você.</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 text-accent-rose">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">2. Entre em contato</h4>
                <p className="text-text-mocha/60">Mande uma mensagem pelo WhatsApp ou Instagram para confirmar cores e prazos.</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 text-accent-rose">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">3. Receba com amor</h4>
                <p className="text-text-mocha/60">Sua peça será produzida e enviada com todo o cuidado até sua casa.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-32 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div {...fadeIn}>
              <span className="text-accent-rose font-bold uppercase tracking-widest text-sm mb-6 block">Contato</span>
              <h2 className="text-5xl md:text-8xl mb-10 font-serif italic">Vamos conversar?</h2>
              <p className="text-text-mocha/70 text-xl md:text-2xl mb-16 leading-relaxed">
                Tire suas dúvidas, peça orçamentos personalizados ou apenas diga um oi. Adoraria ouvir você e transformar suas ideias em realidade!
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
                <a 
                  href="https://wa.me/5551996113728" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white px-12 py-6 rounded-full font-bold flex items-center justify-center gap-4 transition-all shadow-2xl shadow-[#25D366]/20 text-xl group"
                >
                  <MessageCircle className="w-8 h-8" />
                  Fale pelo WhatsApp
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://www.instagram.com/tinahpetry/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 text-text-mocha/80 hover:text-accent-rose transition-all text-xl font-bold group"
                >
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg border border-accent-rose/10 group-hover:scale-110 transition-transform">
                    <Instagram className="w-8 h-8 text-accent-rose" />
                  </div>
                  @tinahpetry
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-accent-rose/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-text-mocha/40 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent-rose/10 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-accent-rose" />
              </div>
              <p>© 2026 Valentina Petry — Feito com carinho 🧶</p>
            </div>
            <div className="flex items-center gap-10 font-bold uppercase tracking-widest text-[10px]">
              <a href="#" className="hover:text-accent-rose transition-colors">Início</a>
              <a href="#produtos" className="hover:text-accent-rose transition-colors">Produtos</a>
              <a href="#contato" className="hover:text-accent-rose transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Shopping Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] overflow-hidden">
          <div 
            className="absolute inset-0 bg-text-mocha/40 backdrop-blur-sm" 
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="absolute right-0 top-0 h-full w-full max-w-md bg-bg-secondary shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-accent-rose/10 flex justify-between items-center">
              <h2 className="text-2xl font-serif">Seu Carrinho</h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-accent-rose/10 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-accent-rose/5 rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-10 h-10 text-accent-rose/30" />
                  </div>
                  <p className="text-text-mocha/60 italic">Seu carrinho está vazio...</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-accent-rose font-bold hover:underline"
                  >
                    Continuar Comprando
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4 bg-bg-warm p-4 rounded-2xl shadow-sm border border-accent-rose/5">
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-sm truncate">{item.name}</h4>
                        <button 
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-text-mocha/40 hover:text-destructive transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-[10px] text-text-mocha/60 uppercase font-bold space-x-2 mb-3">
                        {item.options.color && <span>Cor: {item.options.color}</span>}
                        {item.options.primaryColor && <span>Cor Principal: {item.options.primaryColor}</span>}
                        {item.options.secondaryColor && item.options.secondaryColor !== "Nenhuma" && <span>Cor Secundária: {item.options.secondaryColor}</span>}
                        {item.options.size && <span>Tam: {item.options.size}</span>}
                        {item.options.type && <span>Tipo: {item.options.type}</span>}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3 bg-bg-warm px-2 py-1 rounded-lg border border-accent-rose/10">
                          <button onClick={() => updateQuantity(item.cartId, -1)} className="hover:text-accent-rose transition-colors">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.cartId, 1)} className="hover:text-accent-rose transition-colors">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-bold text-accent-rose">R$ {item.price * item.quantity},00</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 bg-bg-warm border-t border-accent-rose/10 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-mocha/60 uppercase text-xs font-bold tracking-widest">Total do Pedido</span>
                  <span className="text-2xl font-serif font-bold text-accent-rose">R$ {cartTotal},00</span>
                </div>
                <button 
                  onClick={checkoutViaWhatsApp}
                  className="w-full bg-accent-rose text-white py-4 rounded-2xl font-bold hover:bg-accent-rose/90 transition-all shadow-lg shadow-accent-rose/20 flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  Finalizar via WhatsApp
                </button>
                <p className="text-[10px] text-center text-text-mocha/40">
                  Ao finalizar, você será redirecionado para o WhatsApp para confirmar os detalhes da sua encomenda.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
