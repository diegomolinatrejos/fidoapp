import React, { useState } from 'react';
import AvatarEditor from 'react-avatar-editor';

const CargarAvatar = ({ onImageChange }) => {
  const [image, setImage] = useState(null);
  const [editor, setEditor] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSave = () => {
    if (editor) {
      const canvas = editor.getImageScaledToCanvas();
      canvas.toBlob((blob) => {
        onImageChange(blob);
      });
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image ? (
        <AvatarEditor
          ref={(editor) => setEditor(editor)}
          image={image}
          width={200}
          height={200}
          border={50}
          color={[255, 255, 255, 0.5]}
          scale={1}
          rotate={0}
        />
      ) : (
        <div>Seleccionar imagen</div>
      )}
      {image && (
        <div>
          <button onClick={handleSave}>Guardar</button>
        </div>
      )}
    </div>
  );
};

export default CargarAvatar;


