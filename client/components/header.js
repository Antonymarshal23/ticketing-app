
import Link from 'next/link';
import { useRouter } from 'next/router';

export default ({ currentUser }) => {
  const router = useRouter();

  // Customer pages
  const isCustomer =
    router.asPath.startsWith('/customer') || router.asPath.startsWith('/auth/customer');
  const links = [
    !currentUser && {
      label: 'Sign Up',
      href: isCustomer
        ? '/auth/customer/signup'
        : '/auth/company/signup'
    },

    !currentUser && {
      label: 'Sign In',
      href: isCustomer
        ? '/auth/customer/signin'
        : '/auth/company/signin'
    },

    currentUser && {
      label: 'Sign Out',
      href: isCustomer
        ? '/auth/customer/signout'
        : '/auth/company/signout'
    }
  ]
    .filter(linkConfig => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item">
          <Link href={href}>
            <a className="nav-link">{label}</a>
          </Link>
        </li>
      );
    });

  return (
    <nav className="navbar navbar-light bg-light">

      {/* Brand */}
      <Link href={isCustomer ? '/customer' : '/'}>
        <a className="navbar-brand">
          Ticketing System
        </a>
      </Link>

      {/* Tickets */}
      <Link
        href={
          isCustomer
            ? '/customer/tickets'
            : '/tickets'
        }
      >
        <a className="navbar-brand">
          Tickets
        </a>
      </Link>

      {/* Orders */}
      {currentUser && (
        <Link
          href={
            isCustomer
              ? '/customer/orders'
              : '/orders'
          }
        >
          <a className="navbar-brand">
            Orders
          </a>
        </Link>
      )}

      {/* Auth links */}
      <div className="d-flex justify-content-end ml-auto">
        <ul className="nav d-flex align-items-center">
          {links}
        </ul>
      </div>

    </nav>
  );
};