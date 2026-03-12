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
            <p className="text-gray-400 mb-4">
              123 Rue de la Dalle<br />
              75011 Paris, France
            </p>
            {/* Carte Interactive stylisée Dark Mode */}
            <div className="w-full h-40 rounded-lg overflow-hidden border-2 border-street-dark">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1615467000000!5m2!1sfr!2sfr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(100%) contrast(150%)' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
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