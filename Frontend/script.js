const btn = document.querySelector("button");
const display = document.querySelector("#display");

btn.addEventListener("click", async () => {
  try {
    const response = await fetch("http://localhost:3000");
    const data = await response.json();
    console.log(data)

    display.innerHTML = `
          <p style="display:block"><strong>Message:</strong> ${data.message}</p>
          <p><strong>Server Time:</strong> ${data.timestamp}</p>
        `;
  } catch (error) {
    display.innerText = "Error: Is the server running?";
    console.error(error);
  }
});
