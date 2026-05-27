import React from 'react'
import Hello from './Hello'
import Welcome from './JSX/Welcome'
import MainCompo from './Components/MainCompo'
import UseCard from './Props and State/UseCard'
import Counter from './Props and State/Counter'
import ClickButton from './Handling Events in React/ClickButton'
import LiveInput from './Handling Events in React/LiveInput'
import LoginLogout from './Conditional Rendering/LoginLogout'
import VoteCheck from './Conditional Rendering/VoteCheck'
import FruitsList from './LISTS & KEYS/FruitsList'
import UsersList from './LISTS & KEYS/UsersList'
import RegisterForm from './FORMS + VALIDATION/RegisterForm'
import LifeCycle from './CLASS LIFECYCLE/LifeCycle'
import CounterHooks from './HOOKS/CounetrHooks'
import UsersAPI from './HOOKS/UsersAPI'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './REACT ROUTER/Home'
import About from './REACT ROUTER/About'
import Contact from './REACT ROUTER/Contact'


function App() {
  return (
    <BrowserRouter >
    <div>
      {/* Introduction to React.js */}
      <Hello />
      <hr />
      {/* JSX */}
      <Welcome />
      <hr />
      {/* Components */}
      <MainCompo />
      <hr />
      {/* Props and State */}
      <UseCard
        name="Parth"
        age={22}
        location="Ahmedabad"
      />
      <Counter />
      <hr />
      {/* Handling Events in React */}
      <ClickButton />
      <LiveInput />
      <hr />
      {/* Conditional Rendering */}
      <LoginLogout />
      <VoteCheck />
      <hr />
      {/* LISTS & KEYS */}
      <FruitsList />
      <UsersList />
      <hr />
      {/* FORMS + VALIDATION */}
      <RegisterForm />
      <hr />
      {/* CLASS LIFECYCLE */}
      <LifeCycle />
      <hr />
      {/* HOOKS */}
      <CounterHooks />
      <UsersAPI />
      <hr />
      {/* REACT ROUTER */}
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/about'element={<About />} />
        <Route path='/contact'element={<Contact />} />
      </Routes>

    </div>
    </BrowserRouter>
    
  )
}

export default App
