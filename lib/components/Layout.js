import Header from './Header';
const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
