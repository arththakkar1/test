type Web3FormsResponse = {
  success: boolean;
  message: string;
  data?: unknown;
};

export async function handleSubmitEmail(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const target = e.target as typeof e.target & {
    name: { value: string };
    email: { value: string };
    message: { value: string };
    company: { value: string };
    phone: { value: string };
  };

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: process.env.NEXT_PUBLIC_API_URL,
      name: target.name.value,
      email: target.email.value,
      message: target.message.value
        .concat(
          target.company.value ? `\n\nCompany: ${target.company.value}` : ""
        )
        .concat(target.phone.value ? `\n\nPhone: ${target.phone.value}` : ""),
    }),
  });

  const result: Web3FormsResponse = await response.json();

  if (result.success) {
    return result;
  }
}
