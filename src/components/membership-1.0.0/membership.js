
import './membership_style.scss'

export default function Membership () {
  return (
    <div className='membership-box'>
      <div id='generic_price_table'>
        <section>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='price-heading clearfix'>
                  <h1>Membresías</h1>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='generic_content clearfix'>
                  <div className='generic_head_price clearfix'>
                    <div className='generic_head_content clearfix'>
                      <div className='head_bg' />
                      <div className='head'>
                        <span>Beginner</span>
                      </div>
                    </div>
                    <div className='generic_price_tag clearfix'>
                      <span className='price'>
                        <span className='sign'>$</span>
                        <span className='currency'>2</span>
                        <span className='cent'>.99</span>
                        <span className='month'>/MON</span>
                      </span>
                    </div>
                  </div>
                  <div className='generic_feature_list'>
                    <ul>
                      <li><span>1</span> Torneo Semanal</li>
                      <li><span>1</span> Roaster en Equipo</li>
                      <li><span>1</span> Sorteo semanal</li>

                    </ul>
                  </div>

                  <div className='generic_price_btn clearfix'>
                    <a className='' href=''>COMPRAR</a>
                  </div>

                </div>

              </div>

              <div className='col-md-4'>

                <div className='generic_content active clearfix'>

                  <div className='generic_head_price clearfix'>

                    <div className='generic_head_content clearfix'>

                      <div className='head_bg' />
                      <div className='head'>
                        <span>PRO</span>
                      </div>

                    </div>

                    <div className='generic_price_tag clearfix'>
                      <span className='price'>
                        <span className='sign'>$</span>
                        <span className='currency'>7</span>
                        <span className='cent'>.99</span>
                        <span className='month'>/MON</span>
                      </span>
                    </div>

                  </div>

                  <div className='generic_feature_list'>
                    <ul>
                      <li><span>2</span> Torneo Semanal</li>
                      <li><span>3</span> Roaster en Equipo</li>
                      <li><span>2</span> Sorteo semanal</li>
                      <li><span>2</span> 20% en Eventos</li>

                    </ul>
                  </div>

                  <div className='generic_price_btn clearfix'>
                    <a className='' href=''>COMPRAR</a>
                  </div>

                </div>

              </div>
              <div className='col-md-4'>

                <div className='generic_content clearfix'>

                  <div className='generic_head_price clearfix'>
                    <div className='generic_head_content clearfix'>
                      <div className='head_bg' />
                      <div className='head'>
                        <span>LEGEND</span>
                      </div>
                    </div>

                    <div className='generic_price_tag clearfix'>
                      <span className='price'>
                        <span className='sign'>$</span>
                        <span className='currency'>70</span>
                        <span className='cent'>.99</span>
                        <span className='month'>/YEA</span>
                      </span>
                    </div>

                  </div>

                  <div className='generic_feature_list'>
                    <ul>
                      <li><span>Full</span> Torneo Semanal</li>
                      <li><span>Full</span> Roaster en Equipo</li>
                      <li><span>Full</span> Sorteo semanal</li>
                      <li><span>Full</span> 30% en Eventos</li>

                    </ul>
                  </div>
                  <div className='generic_price_btn clearfix'>
                    <a className='' href=''>COMPRAR</a>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  )
}
