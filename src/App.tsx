import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Loading } from "./components";

const NotFound = lazy(() => import("./pages/not-found/NotFound"));
const AuthLayout = lazy(() => import("./pages/auth/AuthLayout"));
const SignIn = lazy(() => import("./pages/auth/SignIn"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const RedefinePassword = lazy(() => import("./pages/auth/RedefinePassword"));
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const ConfirmSignUp = lazy(() => import("./pages/auth/ConfirmSignUp"));

const Layout = lazy(() => import("./pages/layout/Layout"));
const Home = lazy(() => import("./pages/home/Home"));
const Profile = lazy(() => import("./pages/profile/Profile"));

const CharacterCreationLayout = lazy(() => import("./pages/character-creation/CharacterCreationLayout"));
const Attributes = lazy(() => import("./pages/character-creation/Attributes"));
const Races = lazy(() => import("./pages/character-creation/Races"));
const Classes = lazy(() => import("./pages/character-creation/Classes"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<SignIn />} />
          <Route path="/forgorpassword" element={<ForgotPassword />} />
          <Route path="/redefinepassword" element={<RedefinePassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/confirmsignup" element={<ConfirmSignUp />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/character-creation" element={<Navigate to="/home" replace />} />
          <Route element={<CharacterCreationLayout />}>
            <Route path="/character-creation/attributes" element={<Attributes />} />
            <Route path="/character-creation/races" element={<Races />} />
            <Route path="/character-creation/classes" element={<Classes />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
