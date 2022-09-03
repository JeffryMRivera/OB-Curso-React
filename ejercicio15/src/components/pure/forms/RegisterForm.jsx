import React, { useState } from "react";

export default function RegisterForm() {
  const initialData = [
    {
      user: "",
      name: "",
      email: "",
      password: "",
    },
  ];

  const [data, setData] = useState(initialData);

  return <div>RegisterForm</div>;
}
