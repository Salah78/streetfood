import { Instagram, Facebook, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-street-gray border-t-4 border-street-accent pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-4xl font-display text-white mb-6">STREET <span className="text-street-accent">FOOD</span></h3>
            <p className="text-gray-400 mb-6">
              L'arrêt obligatoire pour les affamés de la nuit.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-street-dark flex items-center justify-center text-white hover:bg-street-accent hover:text-street-dark transition-colors">
                <Instagram />
              </a>
              <a href="#" className="w-12 h-12 bg-street-dark flex items-center justify-center text-white hover:bg-street-accent hover:text-street-dark transition-colors">
                <Facebook />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold uppercase mb-6 flex items-center gap-2">
              <MapPin className="text-street-danger" /> Le Spot
            </h4>
            <p className="text-gray-400">
              123 Rue de la Dalle<br />
              75011 Paris, France
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold uppercase mb-6 flex items-center gap-2">
              <Clock className="text-street-accent" /> Horaires
            </h4>
            <ul className="text-gray-400 space-y-2">
              <li className="flex justify-between"><span>Lundi - Jeudi</span> <span>18h00 - 02h00</span></li>
              <li className="flex justify-between"><span>Vendredi - Samedi</span> <span>18h00 - 04h00</span></li>
              <li className="flex justify-between text-street-danger"><span>Dimanche</span> <span>Fermé</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-street-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} STREET FOOD. Tous droits réservés.
          </p>
          <div className="text-5xl font-display text-street-dark">
            SF
          </div>
        </div>
      </div>
    </footer>
  );
}