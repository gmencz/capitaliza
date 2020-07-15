import { FC } from 'react';
import * as SC from './styles';
import Link from 'next/link';

const Footer: FC = (): JSX.Element => {
  return (
    <SC.Footer>
      <div>
        <nav>
          <div>
            <h3>Legal</h3>
            <ul>
              <li>
                <Link href="/terms/ethical-management">
                  <a>Política de gestión ética</a>
                </Link>
              </li>
              <li>
                <Link href="/terms/privacy">
                  <a>Política de privacidad</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <span>
            &copy; <time>{new Date().getFullYear()}</time> CAPITALIZA
          </span>
        </div>
      </div>
    </SC.Footer>
  );
};

export default Footer;
