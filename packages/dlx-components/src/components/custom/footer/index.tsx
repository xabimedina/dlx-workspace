import Instagram from "./icons/instagram";
import LinkedIn from "./icons/linkedin";
import YouTube from "./icons/youtube";
import { DlxLink } from "../dlx-link";
import { FooterSocialMedia } from "./footer-social-media";

export function DlxFooter() {
  return (
    <div className="w-full">
      {/* Footer Section */}
      <footer className="bg-jet text-smoke py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Logo and Brand */}
            <div className="lg:col-span-1">
              <div className="w-3/4 mb-6">
                <img src="/brand/dlx-logo-white.png" alt="DespejalaX Logo" />
              </div>
              <p className="text-smoke px-2 leading-relaxed">
                Soluciones innovadoras para tu hogar.
              </p>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Servicios</h3>
                <ul className="space-y-3">
                  <li>
                    <DlxLink>Arquitectura</DlxLink>
                  </li>
                  <li>
                    <DlxLink>Interiorismo</DlxLink>
                  </li>
                  <li>
                    <DlxLink>Asesoramiento</DlxLink>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">
                  Ultimos proyectos
                </h3>
                <ul className="space-y-3">
                  <li>
                    <DlxLink>RMNC</DlxLink>
                  </li>
                  <li>
                    <DlxLink>MGJA</DlxLink>
                  </li>
                  <li>
                    <DlxLink>XMYN</DlxLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold text-lg mb-4">Síguenos</h3>
              <div className="flex py-2 space-x-8">
                <FooterSocialMedia
                  icon={<Instagram className="h-5 w-5" />}
                  link="https://instagram.com/despejalax"
                />
                <FooterSocialMedia
                  icon={<LinkedIn className="h-5 w-5" />}
                  link="https://www.linkedin.com/company/despejalax/"
                />
                <FooterSocialMedia
                  icon={<YouTube className="h-5 w-5" />}
                  link="https://www.youtube.com/channel/UC0-3-9-0q-2-5-8-6-4"
                />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className=" mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2025 DespejalAX. Todos los derechos reservados.
              </p>
              {/* <div className='flex space-x-6 text-sm'>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors duration-300'
                >
                  Política de Privacidad
                </a>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors duration-300'
                >
                  Términos de Servicio
                </a>
              </div> */}
            </div>
          </div>

          {/* Accent Line */}
          <div className="mt-8">
            <div className="h-1 bg-saffron"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
