export async function handleSubmitEmail(e: any) {
  e.preventDefault();
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: process.env.NEXT_PUBLIC_API_URL,
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
        .concat(
          e.target.company.value
            ? `\n\nCompany: ${e.target.company.value}` // will appear as **COMPANY:** in plain text
            : ""
        )
        .concat(
          e.target.phone.value ? `\n\nPhone: ${e.target.phone.value}` : ""
        ),
    }),
  });
  const result = await response.json();
  if (result.success) {
    return result;
  }
}
