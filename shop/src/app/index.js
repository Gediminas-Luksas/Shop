import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PacmanLoader } from 'react-spinners';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Switch,
} from 'react-router-dom';

import auth from '../auth';
import shop from '../shop';
import { Shop, Favorites, Cart, PageNotFound, Login } from './pages';
import { PageLayout, PrivateRoute } from './components';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.NAV_LINKS = [
      { title: 'Login', to: '/login', accessLevel: 'notLogged' },
      { title: 'Logout', accessLevel: 'onlyLogged', onClick: props.logout },
      { title: 'Cart', to: '/cart' },
      { title: 'Favorites', to: '/favorites', accessLevel: 'onlyLogged' },
      { title: 'Shop', to: '/shop' },
    ];
  }

  componentDidMount() {
    const { getProducts } = this.props;
    getProducts();
  }

  renderNav = () => {
    const { isLogged } = this.props;

    return this.NAV_LINKS.map(
      ({ title, accessLevel = 'always', to = '#', ...props }, i) => {
        if (accessLevel === 'onlyLogged' && isLogged) {
          return (
            <NavLink key={i} to={to} {...props}>
              {title}
            </NavLink>
          );
        }

        if (accessLevel === 'notLogged' && !isLogged) {
          return (
            <NavLink key={i} to={to} {...props}>
              {title}
            </NavLink>
          );
        }
        if (accessLevel === 'always') {
          return (
            <NavLink key={i} to={to} {...props}>
              {title}
            </NavLink>
          );
        }
        return undefined;
      }
    ).filter(Boolean);
  };

  render() {
    const { loading, error } = this.props;
    return (
      <Router>
        <PageLayout navLinks={this.renderNav()}>
          {error && <span>{error}</span>}
          {loading && <PacmanLoader />}
          <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/favorites" component={Favorites} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/404" component={PageNotFound} />
            <Redirect exact from="/" to="/shop" />
            <Redirect to="/404" />
          </Switch>
        </PageLayout>
      </Router>
    );
  }
}

const endhance = connect(
  state => ({
    error: shop.selectors.getError(state),
    loading: shop.selectors.isLoading(state),
    isLogged: auth.selector.isLogged(state),
  }),
  dispatch => ({
    getProducts: bindActionCreators(shop.actions.getProducts, dispatch),
    logout: bindActionCreators(auth.actions.logout, dispatch),
  })
);

export default endhance(App);
