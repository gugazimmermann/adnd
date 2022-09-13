type RememberMeType = {
  remember: boolean;
  setRemember: (remember: boolean) => void;
};

const RememberMe = ({ remember, setRemember }: RememberMeType) => (
  <div className="form-group form-check">
    <input
      type="checkbox"
      name="checkbox"
      id="checkbox"
      defaultChecked={remember}
      onChange={() => setRemember(!remember)}
      className="form-checkbox h-4 w-4 rounded-sm text-red-600 bg-stone-100 border border-stone-400 focus:outline-none focus:ring-offset-0 focus:ring-0 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
    />
    <label className="form-check-label inline-block" htmlFor="checkbox">
      Remember Me
    </label>
  </div>
);

export default RememberMe;