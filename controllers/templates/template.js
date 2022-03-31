module.exports = loadTemplate = async ({ message }) => {
  return `
  <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>

    <style>
      body {
        width: 1000px;
      }

      .main_content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: "100px";
      }
    </style>

    <body>
      <div class="main_content">
        <p style="max-width: 750px">${message}</p>
      </div>
    </body>
  </html>
  `;
};
