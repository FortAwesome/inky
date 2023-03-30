var compare = require("./lib/compare");

describe("FAButton", () => {
  it("generates an outlook compatable button with a success class and appropriate colors", () => {
    var input = `
            <fa-button ol-height="60" align="center" width="300" ol-width="300" class="success radius" href="https://fontawesome.com/support">
            Some New Button Text
          </fa-button>
        `;
    var expected = `
    <!--[if mso]><div><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:w="urn:schemas-microsoft-com:office:word"
    href="https://fontawesome.com/support"
    style="height: 60px; v-text-anchor: middle; width: 300px"
    arcsize="20%"
    strokecolor="#1e3650"
    fillcolor="#63E6BE"><w:anchorlock /><center
      style="
        color: #DBE5F0;
        font-family: sans-serif;
        font-size: 16px;
        font-weight: bold;
        mso-style-textfill-type:gradient;
        mso-style-textfill-fill-gradientfill-stoplist:'0 \#183153 1 100000\,99000 \#183153 1 100000';
      "
    >
      Some New Button Text
    </center></v:roundrect></div><![endif]-->
     <!--[if !mso]><!-- -->
    <table class="button success radius" role="presentation">
                <tbody>
                    <tr>
                        <td>
                            <table role="presentation">
                                <tbody>
                                    <tr>
                                        <td><a align="center" width="300" href="https://fontawesome.com/support">
                                                Some New Button Text
                                            </a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                    </tr>
                </tbody>
            </table>
            <!--<![endif]-->
        `;
    compare(input, expected);
  });

  it("generates an outlook compatable button with an alert class and appropriate colors", () => {
    var input = `
            <fa-button ol-height="1000" align="left" width="600" ol-width="700" class="alert radius" href="https://fontawesome.com/faq">
            Some Alert Text
          </fa-button>
        `;
    var expected = `
    <!--[if mso]><div><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:w="urn:schemas-microsoft-com:office:word"
    href="https://fontawesome.com/faq"
    style="height: 1000px; v-text-anchor: middle; width: 700px"
    arcsize="20%"
    strokecolor="#1e3650"
    fillcolor="#FF8787"><w:anchorlock /><center
      style="
        color: #DBE5F0;
        font-family: sans-serif;
        font-size: 16px;
        font-weight: bold;
        mso-style-textfill-type:gradient;
        mso-style-textfill-fill-gradientfill-stoplist:'0 \#183153 1 100000\,99000 \#183153 1 100000';
      "
    >
      Some Alert Text
    </center></v:roundrect></div><![endif]-->
    <!--[if !mso]><!-- -->
    <table class="button alert radius" role="presentation">
                <tbody>
                    <tr>
                        <td>
                            <table role="presentation">
                                <tbody>
                                    <tr>
                                        <td><a align="left" width="600" href="https://fontawesome.com/faq">
                                                Some Alert Text
                                            </a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                    </tr>
                </tbody>
            </table>
            <!--<![endif]-->
        `;
    compare(input, expected);
  });

  it("generates a button without a background color class applied", () => {
    let input = `
            <fa-button ol-height="50" align="left" width="50" ol-width="200" class="default radius" href="https://fontawesome.com/faq">
            Default button
          </fa-button>
        `;
    let expected = `
    <!--[if mso]><div><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:w="urn:schemas-microsoft-com:office:word"
    href="https://fontawesome.com/faq"
    style="height: 50px; v-text-anchor: middle; width: 200px"
    arcsize="20%"
    strokecolor="#1e3650"
    fillcolor="#F0F1F3"><w:anchorlock /><center
      style="
        color: #DBE5F0;
        font-family: sans-serif;
        font-size: 16px;
        font-weight: bold;
        mso-style-textfill-type:gradient;
        mso-style-textfill-fill-gradientfill-stoplist:'0 \#183153 1 100000\,99000 \#183153 1 100000';
      "
    >
      Default button
    </center></v:roundrect></div><![endif]-->
    <!--[if !mso]><!-- -->
    <table class="button default radius" role="presentation">
                <tbody>
                    <tr>
                        <td>
                            <table role="presentation">
                                <tbody>
                                    <tr>
                                        <td><a align="left" width="50" href="https://fontawesome.com/faq">
                                                Default button
                                            </a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                    </tr>
                </tbody>
            </table>
            <!--<![endif]-->
        `;
    compare(input, expected);
  });
});
