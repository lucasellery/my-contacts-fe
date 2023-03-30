import { Container } from './styles';
import logo from '../../assets/images/logo-mc.svg';

export default function Header() {
  return (
    <Container>
      <img
        src={logo}
        alt="My Contacts Logo"
        width={201}
      />
    </Container>
  );
}
