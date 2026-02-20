import { useMutation } from "@apollo/client/react";
import { CREATE_COMMENT, PUBLISH_COMMENT } from "../GRAPHQL/mutiation";
import { useState } from "react";

function AddComponent({ findPost }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const [createComment] = useMutation(CREATE_COMMENT);
  const [publishComment] = useMutation(PUBLISH_COMMENT);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { name, email, text } = formData;

      // 1️⃣ Create Comment
      const response = await createComment({
        variables: {
          name,
          email,
          text,
          postId: findPost.id,
        },
      });

      const commentId = response.data.createComment.id;

      // 2️⃣ Publish Comment
      await publishComment({
        variables: {
          id: commentId,
        },
      });

      alert("Comment submitted successfully!");

      // 3️⃣ Reset form
      setFormData({
        name: "",
        email: "",
        text: "",
      });

    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="border p-4 rounded-lg mb-3 shadow-xl border-white">
      <input
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
        className="w-full border border-gray-400 rounded-2xl mt-4 h-12 px-3"
        type="text"
        placeholder="نام"
      />

      <input
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
        className="w-full border border-gray-400 rounded-2xl mt-4 h-12 px-3"
        type="email"
        placeholder="ایمیل"
      />

      <textarea
        value={formData.text}
        onChange={(e) =>
          setFormData({ ...formData, text: e.target.value })
        }
        className="w-full min-h-[120px] p-4 border border-gray-400 rounded-2xl mt-4 resize-none"
        placeholder="متن کامنت"
      />

      <div className="flex justify-end mt-4">
        <button
          onClick={handleSubmit}
          className="!bg-blue-500 text-white px-6 py-2 rounded-lg"
        >
          ارسال
        </button>
      </div>
    </div>
  );
}

export default AddComponent;