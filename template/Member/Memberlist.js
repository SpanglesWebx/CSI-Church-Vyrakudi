const generateHTML = (members) => {
  return `
  <html>
  <head>
    <style>

      body {
        font-family: Arial, sans-serif;
        font-size: 11px;
        margin: 0;
        padding: 0;
      }

      /* HEADER */
      header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 70px;
        text-align: center;
        background: #fff;
      }

      header h1 {
        margin: 10px 0 0;
        font-size: 16px;
        font-weight: bold;
      }

      header h2 {
        margin: 2px 0;
        font-size: 12px;
        font-weight: normal;
        color: #555;
      }

      /* CONTENT */
      main {
        margin-top: 90px;
        padding: 0 15px;
      }

      /* TABLE */
      table {
        width: 100%;
        border-collapse: collapse;
      }

      thead {
        display: table-header-group;
        background-color: #f2f2f2;
      }

      th {
        text-align: left;
        font-weight: bold;
        font-size: 11px;
        padding: 8px;
        border: 1px solid #ccc;
      }

      td {
        padding: 7px;
        border: 1px solid #ddd;
        font-size: 10px;
      }

      /* ROW SPACING LOOK */
      tbody tr:nth-child(even) {
        background-color: #fafafa;
      }

      tr {
        page-break-inside: avoid;
      }

      @page {
        margin: 0;
      }

    </style>
  </head>

  <body>

    <!-- HEADER -->
    <header>
      <h1>CSI Church - Vyrakudy</h1>
      <h2>Member List</h2>
    </header>

    <!-- CONTENT -->
    <main>
      <table>
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Member ID</th>
            <th>Name</th>
            <th>Family ID</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          ${members.map((m, i) => `
            <tr>
              <td>${i + 1}</td>
              <td>${m.member_id || "-"}</td>
              <td>${m.member_name || "-"}</td>
              <td>${m.family_id || "-"}</td>
              <td style="color:${m.status === "Active" ? "#0a8f2f" : "#d11a2a"}; font-weight:bold;">
                ${m.status || "-"}
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </main>

  </body>
  </html>
  `;
};

module.exports = generateHTML;