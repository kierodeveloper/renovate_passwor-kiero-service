class Template{

    public sendEmail(req:any,token:string){
        
        const template = `
        <!DOCTYPE html>
        <html>
          <body>
            <div>
              <div style="color:transparent;opacity:0;font-size:0px;border:0;max-height:1px;width:1px;margin:0px;padding:0px;border-width:0px!important;display:none!important;line-height:0px!important"><img border="0" width="1" height="1" src="" class="CToWUd"></div>
              <table width="100%"  cellpadding="0" cellspacing="0">
              <tbody>
                <tr>
                  <td width="580" align="center" style="padding-top:20px">
                    <table height="40" width="580"  cellpadding="0" cellspacing="0" style="background-color:#ffffff">
                      <tbody>
                        <tr>
                          <td width="580"  style="padding:30px 30px 20px 30px">
                            <table width="100%"  cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                              <tbody>
                                <tr>
                                  <td  valign="bottom" style="padding:0 0 35px 0">
                                    <table width="520">
                                      <tbody>
                                        <tr>
                                          <td style="font-size:32px;line-height:36px;padding:0 0 0 0;font-family:helvetica neue,helvetica,arial,sans-serif;font-weight:bold;color:#444444;max-width:300px;overflow:hidden;text-overflow:ellipsis">
                                            <span style="color:#e60023">Kiero...</span> 
                                            <h4>HOLA!  Cambia tu contraseña.</h4>
                                          </td>
                                          <td valign="top">
                                            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                              <tbody>
                                                <tr>
                                                  <td align="center" valign="top" height="50">
                                                    <a href=" logo.png" max-width="10px" height="100px">
                                                      <img width="48" height="48" border="0" src=" logo.png" class="img-responsive" alt="kiero">
                                              </tbody>
                                            </table>
                                      </tbody>
                                    </table>
                              </tbody>
                            </table>
                      </tbody>
                    </table>
                    <table width="580"  cellpadding="0" cellspacing="0" style="background-color:#ffffff">
                  <td width="550"  style="padding-bottom:50px">
                  <table width="100%"  cellpadding="0" cellspacing="0" style="background-color:#ffffff">
                  <tbody><tr>
                  <td width="580"  style="padding:0 30px 0 30px;background-color:#ffffff">
                  <table width="100%"  cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                  <tbody><tr>
                  <td  valign="bottom" style="padding:0px 0 40px 0;font-family:helvetica neue,helvetica,arial,sans-serif;font-size:22px;line-height:26px;color:#444444">
                    click en este boton para cambiar de clave.
                  <tr>
                  <td width="580" align="center" style="padding:0 30px 0 30px;background-color:#ffffff">
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                  <tbody><tr>
                  <td align="center" style="padding:50 35px 0 35px">
                  <a href=" https://miro.medium.com/max/3150/2*QIhL7Hq_V0ShZigdhQF_Dg.jpeg" width="120" height="100">
                  <table width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tbody><tr>
                  <td align="center" style="padding:14px 20px 14px 20px;background-color:#e60023;border-radius:4px">
                  <a href="http://l144.217.222.109:4000/forget?-${token}-" style="font-family:helvetica neue,helvetica,arial,sans-serif;font-weight:bold;font-size:18px;line-height:1.5;color:#ffffff;text-decoration:none;display:block;text-align:center;max-width:400px;overflow:hidden;text-overflow:ellipsis" target="_blank" data-saferedirecturl="">
                  Cambiar Contraseña
                  </a>
                  </tbody></table>
                  </a>
                  <tr>
                  <td width="580" align="center" style="padding:0 30px 0 30px;background-color:#ffffff">
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                  <tbody><tr>
                  <td style="height:30px;font-size:30px">
                  </td>
                  </tr>
                  </tbody></table>
                  <tr>
                  <td width="580" align="center" style="padding:0 30px 0 30px;background-color:#ffffff">
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                  <tbody><tr>
                  <td align="left" valign="bottom" style="padding:0px 0 0px 0;font-family:helvetica neue,helvetica,arial,sans-serif;font-size:22px;line-height:26px;color:#444444">
                  ¿No te has registrado en kiero? <a href="https://www.kiero.co" style="color:#3983d0;text-decoration:none;font-weight:bold" target="_blank" data-saferedirecturl="">Ponte en contacto con nosotros</a>.
                  </td>
                  </tr>
                  </tbody></table>
                  </tbody></table>
                  </tbody></table>
                  </td>
                  </tr>
                  </tbody></table>
                  <table width="100%" border="0" cellpadding="0" cellspacing="0">
              <tbody>
                <tr>
                  <td align="center">
                    <table width="580"  cellpadding="0" cellspacing="0" style="background-color:#f7f7f7">
              <tbody>
                <tr>
                  <td  style="padding:0 30px 0 30px">
                    <table width="100%"  cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                      <tbody>
                        <tr>
                          <td  valign="bottom" height="30" style="padding:32px 0 32px 0">
                            <img src="https://miro.medium.com/max/3150/2*QIhL7Hq_V0ShZigdhQF_Dg.jpeg" class="img-rounded" alt="kiero" width="100" height="80">
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td  style="padding:0 30px 30px 30px">
                    <table width="100%"  cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                      <tbody>
                        <tr>
                          <td>
                            <table  cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                              <tbody>
                                <tr>
                                  <td  style="font-family:helvetica neue,helvetica,arial,sans-serif;font-size:12px;line-height:22px;color:#444444">
                                    <a href="#m_765950199941789834_" style="color:#444444;text-decoration:none">
                                    </a>
                                  </td>
                                  <td  style="padding:0 4px 0 4px;font-family:sans-serif;font-size:18px;color:#444444">
                                  </td>
                                  <td  style="font-family:helvetica neue,helvetica,arial,sans-serif;font-size:12px;line-height:22px;color:#444444">
                                    <a href="#m_765950199941789834_" style="color:#444444;text-decoration:none">
                                  </td>
                                  <td  style="font-family:helvetica neue,helvetica,arial,sans-serif;font-size:12px;line-height:22px;color:#444444">
                                  <a href="https://www.kiero.co/privacidad.html" style="color:#444444;text-decoration:underline" target="_blank" data-saferedirecturl=" logo.png">
                                  Política de privacidad
                                  </a>
                                  </td>
                                  <td  style="padding:0 4px 0 4px;font-family:sans-serif;font-size:18px;color:#444444">
                                  </td>
                                  <td  style="font-family:helvetica neue,helvetica,arial,sans-serif;font-size:12px;line-height:22px;color:#444444">
                                    <a href="https://www.kiero.co/terms.html">
                                    Términos y condiciones
                                    </a>
                                  </td>
                                  <td  style="padding:0 4px 0 4px;font-family:sans-serif;font-size:18px;color:#444444"></td>
                                  </td>
                                  <td  style="font-family:helvetica neue,helvetica,arial,sans-serif;font-size:12px;line-height:22px;color:#444444">
                                    <a href="http://kiero.co/help.html">
                                    ayuda/pqr
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table  cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                              <tbody>
                                <tr>
                                  <td  style="font-family:helvetica neue,helvetica,arial,sans-serif;font-size:12px;line-height:22px;color:#444444">
                                    <a href="">
                                    </a>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <img src=" logo.png" width="0" height="0" class="CToWUd">
                    <img border="0" width="1" height="1" alt="" src="" class="CToWUd">
                    <div class="yj6qo"></div>
                    <div class="adL">
                    </div>
            </div>
            <div class="adL">
            </div></div></div><div id=":k5" class="ii gt" style="display:none"><div id=":k6" class="a3s aXjCH undefined"></div></div><div class="hi"></div></div></div>
          </body>
        </html>
        `
        return template;
    }
}

const template = new Template();
export default template;