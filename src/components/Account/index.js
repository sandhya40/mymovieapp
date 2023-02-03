import Cookies from 'js-cookie'
import NavBar from '../NavBar'
import Footer from '../Footer'
import './index.css'

const isAccount = true

const AccountPage = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')import Cookies from 'js-cookie'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const Account = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <>
      <div className="header-sec">
        <Header />
      </div>
      <div className="account-container">
        <h1 className="heading">Account</h1>
        <hr className="hz-line" />
        <div className="membership-container">
          <p className="member-details">Member ship</p>
          <div className="user-details">
            <p className="username">madhu7544@gmail.com</p>
            <p className="password">Password: **********</p>
          </div>
        </div>
        <hr className="hz-line" />
        <div className="plan-details-container">
          <p className="member-details">Plan Details</p>
          <p className="username">Premium</p>
          <p className="plan-type">Ultra HD</p>
        </div>
        <hr className="hz-line" />
        <button onClick={onClickLogout} type="button" className="logout-btn">
          Logout
        </button>
      </div>
      <div className="footer-sec">
        <Footer />
      </div>
    </>
  )
}

export default Account
  }
  return (
    <>
      <NavBar isAccount={isAccount} />
      <div className="account-page">
        <h1 className="account-heading">Account</h1>
        <hr className="separator" />
        <div className="member-ship-details">
          <p className="member-ship-text">Member ship</p>
          <div className="userDetails">
            <p className="username">Rahul@gmail.com</p>
            <p className="password">Password</p>
            <span>: **********</span>
          </div>
        </div>
        <hr className="separator" />
        <div className="plan-details">
          <p className="plan-details-text">Plan details</p>
          <p className="plan-name">Premium</p>
          <p className="plan-feature">Ultra HD</p>
        </div>
        <hr className="separator" />
        <button onClick={onLogout} type="button" className="log-out-btn">
          Logout
        </button>
      </div>
      <Footer />
    </>
  )
}
export default AccountPage
