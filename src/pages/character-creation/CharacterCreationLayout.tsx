import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Button, Title } from "../../components";
import CharacterModal from "./CharacterModal";

export default function CharacterCreationLayout() {
  const navigate = useNavigate();
  const [showCharModal, setShowCharModal] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [back, setBack] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [buttonText, setButtonText] = useState<string>("");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [forward, setForward] = useState<string>("");

  return (
    <section className="relative">
      <div className="absolute top-0 right-0">
        <button type="button" onClick={() => setShowCharModal(true)}>
          <i className="bx bx-spreadsheet text-2xl" />
        </button>
      </div>
      <Title
        text={title}
        back={back}
        className="font-bold text-xl text-center mb-4"
      />
      <ReactMarkdown className="px-4">{description}</ReactMarkdown>
      <Outlet
        context={{
          setTitle,
          setBack,
          setDescription,
          setButtonText,
          setButtonDisabled,
          setForward,
        }}
      />
      <div className="text-center mt-4 mb-4">
        <Button
          text={buttonText}
          disabled={buttonDisabled}
          handler={() => navigate(forward)}
        />
      </div>
      {showCharModal && (
        <CharacterModal show={showCharModal} setShow={setShowCharModal} />
      )}
    </section>
  );
}
