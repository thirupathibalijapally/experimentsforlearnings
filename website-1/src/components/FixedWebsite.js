import React, { Component } from 'react'
import "../css/FixedWebsite.css"
 class FixedWebsite extends Component {
    render() {
        return (
            <div >
               <div id="container">
               
                <div className="header">
                <img src="https://www.pixelstalk.net/wp-content/uploads/2015/12/Batman-Logo-Backgrounds-Free-Download.jpg" ></img>
                    <h1>Historyden.com</h1>
                   
                </div>
                <div className="nav">
                    <ul>
                        <li><a href="#home.js">Home</a></li>
                        <li><a href="#history.js">History</a></li>
                        <li><a href="#Fighters.js">Fighters</a></li>
                        <li><a href="#wars.js">Wars</a></li>
                        <li><a href="#innovations.js">Innovations</a></li>
                    </ul>
                </div>
                <div className="sideleft"></div>
                <div className="sideright"></div>
                <div className="main">
                   <div className="minibox">
                       <a>
                            <img target="_blank" src="https://th.bing.com/th/id/OIP.SSDmuebEJvRu5Bmm7JG2igHaKn?w=182&h=262&c=7&o=5&dpr=1.25&pid=1.7" width="70px" heght="300px"></img>

                       </a>
                       <p>This series we are going to cover about Rom Empire as well as
                           Rom Republic,Please click above image to read the series.</p>
                      
                      
                   </div>
                   <div className="minibox">
                       <a>
                            <img target="_blank" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhYZGRgaHBoZGBocGBgZGBgYGBgaGhwaGRgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISGDEhGCE0NDQ0NDE0MTQ0NDQ0NDE0NDQ0NDE0NDQ0PzQ0ND8xPzQ/ND80PzExMTExMTExMTExMf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYHAQj/xABBEAACAQIDBQQIBAUCBQUAAAABAgADEQQSIQUGMUFRImFxkhMUMlKBkdHSQmKhsSNTgsHwBxUWQ1Ry4TM0NcLx/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABsRAQEBAQEBAQEAAAAAAAAAAAABEQISMSFB/9oADAMBAAIRAxEAPwDr3qqe4vlX6T31ZPcXyj6R6EKZ9WT3F8o+kPVU9xfKv0j0IQx6qnuJ5R9Ieqp7i+VfpH4Qpn1ZPcXyj6Q9WT3F8o+kehCGfVU9xfKv0h6qnuJ5R9I9CAz6qnuJ5R9J4cKnuL5V+kfkLaePSihdyAAOcBOMejTUu6oAPyrr4TAbf3kuSqKiKeFlXN+0g7X2+9UGq+iaimvXv+Mx9TFl2JM53q346zmT60FLHliOyLX6D95fbPZWY3Qaa8BMls1tZqtnPaZ/Wl9RoKfwr5RJSYZPcXyiRcO+kn02lZKTDJ7i+UfSKOET3F8o+kcSOrNIYpoEOiKR0KiT6Bpt+BQehVfpI5EbKyypeYtPVU9xfKv0h6qnuL5R9Ixg8Tfstx5HrJompWcw16snuL5R9IerJ7i+UR6EIZ9WT3F8o+k89VT3E8o+kfhCmPVE9xfKPpD1RPcXyj6R+EBj1VPcTyj6T31dPcXyj6R6EBj1RPcXyj6Qj8IBCEIBCEIBCEIBCEIBCEIHhM47v3vAcRX9Cp/hI1m/MR16i86RvftH1fCVag9oLZf+5tB+84SoNrnUnU36zHVa5g2ji2c5bnKugHIDukekIi1zJ+DwDtqFuO4iRv8Aqfs5b2+E1mBW1hKDB0mU3ak9uGgvb5TQ0Ua4sp/aZVdYZdJYUpU4VjwPGWmGlSpqCOLEIYu80j2JMSWiQ0BdpY4WrmGvGVgaSKDWYGWM9RZwngns0yIQhAIQhAIQhAIQhAIQhAIQhAIQhAIQnl4HsIgtE59JcRgv9XMVbD06YPtvc+CC/wC9pzZdRebT/VdyalBfyufiSJlKNG4AAvwnLp15iE9PWWmxw5dVVrXkzC7CDe29uunD4y6wW7ChgyV7gd2omf41mPXo4inxTMPeQ3+Y4iLWtVa1kbTjcW+c01GmQACbkaXta/wimpLwtGGqbCKWILPa1rhfrL6hQC8LyprYdaa3QaX11lvhXBHGWJUkT0wWe3mkR3MQXj7rGCklCkeSkMiKsfR9NDLKVb0TdRHIxhT2RH5qOYhCEoIQhAIQhAIQhAIQhAIQhAIQhADEAxTRthKhLmN57XnlV4yXktVz7/U5b1KB/K4/UTIJtFaYNuNunSbf/UqncUW6Flv8Af7TAJhC5bgqJq7sbIgJ68zrw4zn1+115+PTvC+lh+sm7K3lqIxa+p68JCxFPCoQGNVzzKBUUeF9TFLs2hU0oViHPCnVAQt3K47N/G0mQ1s8NvbcpdeRz9/eJY4LbAqMSNNeHdyvObUKrI5pupV1uCDofCaPYNUmoFU6kSLFntrbmRnTgAenO1xYzPNvfXSoHRuzYDKbW75W7wVn9K4cEODqDKpQD2mbKo52vr0A5makZta+lv1iM4a65TYFbaADmO+a3D74UmUXBzHkBYfOcyw2VWFkVh1csePcs2uz6WBZAGVUbmVZgAfB/rJo2mCxyVFBVh3jnfnJWWZ7DbNVCHpsSLXUg3VhL3DVcyi4s1tRLKAieppwhVGhlXSqtdg18qns9/cJdGpwTdmSM46zn2H2zWcNmqCnTGZjlAzBRxGaVOG35IcFKX8K9gSWzsOt+vdE6Z8uswkLZmLFRFdTcMLg90mzUrIhCEoIQhAIQhCCEIQohCEAhCEDwmR3e0W5kaoDzlv4huo15R7zbQ9CiNxUuqP/ANrAi8t2aZrfnXDAW0zoD8TaY6+NT6yu2g7h6ZcstPtIDrYODzmb3kUJ6PDq10pqrP8AmquLszdbXsJtatH0VQF0DqabI4vxHXxEyu3sGoYkAksbqbXDKfZHiOHwnOXHWqLE1CVVyNPZvy+QkXOWvpcddR4TQ0dmkr2r2HEDl4zw7JLnKnE9RxM1rOVVYzHVKgRnN3QBM34mW91zHmRwvNXuYoeqjDO7A3yot8o/M50lLi93a9O6OtiSuUjUG+tx8J0bcjCKjWUcEAMWwkV2/eCw1Vh2vR4k2ChxlDjvPD4znuNw1mKEns6fHme8XnbN7N21xtIJmCOpujkXtpYjwMz/APw4uJo00qIKdSmvoy40bsaXt+IEWI8ZU+ud4bCMwXIMxF9DreabYm7Ltq9U0h8L/I6S7pbiZD2K58Stv2ksbn6Wau5Pdov6zN2tTHlDA5FWlTqvVs2YcBqRqumljNBQqBEGcheHE8+g6ymq7DbPTpK7AFs5a+qqg1+ZImgobMRSrN/EdRYVH1YeHSWRLSKzMR2AB3sP2XnKmjh2BfMSb3NydeH6CX1aRhTBuDwIt84pK57g6BxPpaWfIgFr6am/KS8ds1V2cyKQTTIsw43vY/oZm9tuaeJekl1WmSg11PPMe/Wa7c2kauGdW1u66nmLgmTF1t93aOTD006KB8bS2vIVE2sBHDUM6RzqUDPYwKkdBlQqeQhAIROaEqFzy8DEtIpQMLxstE55ND8SxjfpIB+suoSTGaz3ime8jV3Ei4jVW5yFi0WohRxdTb4WNwfmJJqPxkGs8KyWPxJOMKHhkI+Nx/aLwlanYUa9gAb03P4WPInoY7tzZ93TEqbFCA46g6XlfjaWdbTlfrrz+xb4bZoAa4BU8GU3BHiI5Tw6U1LgWIHtHlMpgsK66B2UdxIEY2ziyBkDsx/EWNwPCILZNoes1SL6U1OT81z2ifkJtd0qJCuT1mZ2PsIU6dOpe+ZcxPUsJpN1sTfOptfQjw1ifS/GntpKHbzehPp1pM97CrlOqqvBgvMy89IJ4Xm2Gfw22UdM9Mh16C2ZfFeIh/uq8HuvQW1J6W4znG0kUYiqaei52y20Fr/teX2ycbSJAfsvya+h+Mzb+tRv8FT4uw7TCw/KvJZLIlPgMaToZaq80xZTVdJV1MTlqrT/ABMMw8BLhzIj4dSwewzAWB526XkqxhNubnVqlZ6lNlbO2ZixtlvbT4Wmy2JgEpItNLEKO0RzbmYqrgyx1dgDyHCScOyouUfHvMshamco0Gjfpbz0GaZSFjqtIyGL9JBUpXnmeMq89DQh7NPI3eEIk5ogtziQYlml0DtPBEZp42vAyKSzaz1zpEoATaeu44QYjvWtI766xytTzaiRnbLof/EKQxldinjmIrjrKfFYi8BONfMjL1Bmew2MOWx4jS/eJPxFX9JW4gDRgAORt15GY6jfNM4vHZTlX2m4Ad8tdnbv5qau6ElmII55eRPx/aZ3EUiHz8QCLfC15psXvOqKgpBiAFuOQ11U9TxmWj2GFXDUgoOZA5GQm4yHhY8vCTcLteiP4iOqnmCbHvEzW1d4qb3VEcCw4243uRbpKCtUU8L2B0uNdY/S10vF75ZwUwyGpVI48ETTqdCZ7u7s5w9Z8Q5qPwuzEKNLkZeXG0wezdorSR1ALFwbHgVNrAyWu89VUZBqGtmLak2tf52lT8dC2/sumVpvlC5SAwVdXVhYgDr0mR3g2b6FzyVtU7xzB7xKV958S7h85JDZgvECx0AA5STV2tWds9SmSGN7ENYaW7N+ElIut3dpNmVGN9RbnfXhN4tc+lKcsisPnYzFbsbHV1DMxVwQy6dNdZrE1xDNyVFQ+JN5YVY1GlPT2pdyDa17CO7UxmRGPPgPE9Jm8NV5ma1nGrfEqBe9+kjo/WVaV72kmm8noWSPHkaQka8eRpqVExXiGeNF42z6xonI2keRpDpPJSMJUpV4T3WEMnwI2xjSPEu8GFvG2qWjL1wOMjmveFOPWy+MS2LGWQcTiNZF9aABhVymKFpVY3EcZBfHdJBxeL74MGJxh8ZWV8X0Mj4jESufESa1h/EYiRHxAvYnTh9Iy9WGBw/paqU72znU9BzPyktWJHpQQw5iN4GmCbETRb07CSnSWtSGiWWpre45P43mepNaxHj8JhrRV2WCbajoe6PYHdlqjWFVFH5ry6w1dXUKw1PBv7Hvi2wwXj+8S1cRsNuWlgXxI/oQn9SZoNl7sYRLdj0jC/afUH+ngJSpjMrWCE/Em/yE0mzsWbewVHhqe7WXUsT02dSX2aaKPyqB+sb2phFek68Li47iOE8fHW4C0iVK7Mbn5dJfxJCsA60wXbkvzI7pK2fX7OZjq5LH48B8hKHauJ9lR4mK2xtIUsPmGhYZV8eczLi2Ie3trh6uUHsr+8iUsWOszvrHO89TFW4yaY2WHxdxxljSrc5kcNjOEt6GM0hLGjSvJCVpR0cReS1qTUqYt/T3i0blK6i0mUzrLrNTaSx9ZHRo6rTUQ7m757E3nkobL6xiriwDrE4hrSsr1ID2IxIOt5Eq4rpK/FVddJBqYy3GTVkWj4i+sj18V0lUdocRFDF6SauFYnF21lViMXfn/l4Y+qbSorVTJq4kVcT3yM9WQ3qxl60mriU9SaHc/BMXNZhYWKp3k8TK3Zm6+KrgMqZFP4n0Hw5zd7M2c1OmtJ7Z0FjYaMOTDqJBOw7KwKOMyOCrDuPOYjG7NOHrPQb8PaQ++h9kj9pr2QjSI3h2W2Lw6uhtiaNyvIunNe/6iCs9RogWt8RLXAsCwDWt3zMYDbK+xU7DDQnlcaEHoZciqOIPy6SZi7rZYQqo4C/Wwkkm8xlPbLICvtd54jujGI2651LEDutaXTGuxNVF6X6Si2rtBUuLjv5/ATL194G1sSf875WNiWqNcnU8IRf7NZ69Ua2F9e4dPGbvG7r0cTRUOCrWujjivQTL7sYcB7e6pPxM2WB2ut8jcRp3dJZhXJN4dhVsI9nF0Ps1B7LfHke6VBqXn0BjcKlZCjqHRhqD+4+s4/vfuk+EY1Eu9EnQ807m7u+S84c9K7C1CJbYevM7SeWFCvrItjS4ataWNOrcTOUK0sqNaGWhw7Sejykwzy3oNLEsWFF9JIWRVYR6m06RLD94RF4S4isrVwbyqr4kcIVK9tZU47FjiJNIbxFfU9JXYqtEPiAech13vpM62RUqRpsWRpeRa76yNUe8xrUie+MzaSNVaOYDZGIq+whI6mwX9Zd4HddkqJ6yRlbRcpuMw/Cxl0VWydh1cS3ZGVBxc8Ph1nQNibr0KFmy5399hfXuHKWmEwqoAqiwAsJMRYS0+nCM4nC5xpow9k9O49xjyR5Vmp8RnQxbMjLldfaX9iOqnrFYOsUcMOXHwljtXZxqKCjZKi6o/wD9W6oekp8DiS+ZHXJVpmzp+zL1UyWKi76bpJWRsVhxZ7ZnQcH6tbkwnMkrunsOy/H+07ns3E5DlPsn9DM7vnuUtS9fDqM+pemNA/evQ901Gfjmn+6VTxf9BG6mKZvaYmKqYS1xYgjQg8j0MYNO0fh+lB5MwNcK6sRwMi06LGxCkiS0wTHkqDvMhG13ZxqNUOXnoby6x9LK2cWAOnxmU3cw4pOGAzv4aATVbZp56Ta2JHZI/C3EHvmW03ZW1LWRuHLul1URXUqwDKwsQdQQZzbZG0y6kPo6Gz+I/EO4zV7L2jyJ7rSypYx29u57UL1cOC1PiV4snh1WZWk+s70rgi+hB+RnPt8N0gt69BdOLoOV9Syj+0lhKzOGeWmGeU1AaWllhpnWsX+GqSzoVZSYZpY0XllRd03k2iZVYVyZYUXmpXOpWsInPCb1HP8AEVz0lTi6mkuK7AnQykxYNz0ma6KyrUMQ72EVVQk8IgpMasMIhbjLfZWHXNwEiU0l3sulrJ/VavAU+yJ7tzCl8OwHtKQ6nmCuoMcwDWFpbUgJplV7vbSFemD+NdHHf18DLhRMjt3Z1TCP65hkLoP/AFqY45b6kDmOc0mAxyVUWpTYMji4P9j3iBOWPIZHDRQaWIk2lZtbZpciomlVPZPJ15o3UdOknI8kLKM/g6wcXsQQbMp4q3MGXmzsR+E/AyHtDBXPpEHbtZh76jr+YcjG8O4IBH/4e/pJ8L+q/ezdAV71aAC1eY4K/j0ac4rbNdCRUpMtuOZTb5zt+GxGbQ8f375H2phGYZk9ocQbFWHQg6XmqzuOLjCUj+FlP5WI/SWGH2dTABu7c+0xm2anhn0rUFB6qMpHiBFru3hnH8N2XoL3/QzGN6zdGrYWUADoNJKTGnIVOo5Swr7q1V9h1fuN1P0lXidm1kBz03HwuPmJMrWxkdolqVcuml+0Oh6gzRbK2iHFxow4jp3+Eq9oUQ4ynQjh3GVmDqtTfNzGhHUS/Ym5XUNlbT1ytwM0Km/+cpgsFXV1DKdD8/CajZGM/CT85ZUsUu8G6mZjUoAA8WTgD3r0MzPoGQ2ZSCORFp1VpVbSwqOLMoP7jwMz1ySsZRaWFJ4nF4AobjVf1HjE0zOe40tqNSwkzD1ucq6DSdRM3zWasfTQjN4TesMW1KxkevR0MxT7fxJ/5zeVPtjT7bxJ41W8qfbNeaemqelIVTDazOHbGI/mH5J9J4NrV/5h+S/STyvpqaNG1pd4NCJzr/eK/wDMPyT6R1Nu4kcKrfJPtjyvqOt4atYjwlxh8QNNZxFd4MSP+c3yT7Y4u82LH/Pbyp9seaeo75SqC1pm8ThfU6npEBGFqH+Ko4UXPBwOSE6HpOYU97caOGJfyp9scbe/GspVsSxUgggrTsQeIPYl8s+nZFq/Lke49DPRVnDaW82LpgIuIcIPZGVDl7rlZOwW82LdwrYpkBzdorTsCFJF7r1AHxk8np2hWk2i845h9r4tyMm0ATfhlp5ra3NrcBa/geuk9p7fxV2X/cFFiLNlp5WBF9Dlvx04fSXzT1HaQJExOF4uvHn39/jOTpvBi7f/ACS8rdmnzte910Fifl42Uu8eLJCjaBuVuCFpFS2a2UDLcm3LjflaXD06hTfgQbWlpRrZhOLrtvFZC7Y1h28lwtLLo2W/s6+9py+YE3lxA1G0HAJXTLQzFGC6+zZWDMbg8lJ748l6dV2vszOM6Dt9Pe/8zOoSD0ImRTefEk2OPca8f4BHtVBcdgckU6ke2O4GPV2rWezHHHOcuZSKIsWLXu4WxygDUDX+pZLys6x1HAY1gLXuOh4y3p1Qw0/z4Tg77yYlUzJinvdOzajexphmuAt9GOW/cekQm+GOHDEv5af2RIl6duxuzqdQEOit32APzmS2rufTY5kJU/5ymDG+m0P+pfyU/siW3vxx44l/LT+yLCdNPSwVTC1AH1pObZhxVuVxL6i9pzHE7y4t1KvXYjvVPtkVd48WNPTtp+VPtk8teo7xgMWGWxOscxCXnB03pxg4Yhh/Sn2yWm+WOI/9y/lp/ZLIz6dSxWhseB4fSVdRAp04TndTejGHjiGP9KfbI7bx4r+c3lT7Zz64tbnUdQR5MoGcgG8OJ/nN5U+2OpvNi/57eVPtknFheo7LnhOPf8UYz/qH8qfbCa81nYpzEmewnWsm2iYQgeQEIQFCLE9hA9gYQgJfgZ5T4CeQgOR4QhA9E9hCB7EmEIAsVCEoafjPVnkJAsT2EIHjSPV4iewgNxdOewgLaMtCEDwxSz2EyFQhCaH/2Q==" width="112px" heght="175px"></img>

                       </a>
                       <p>This series we are going to cover about Indian Empire as well as
                           Indian Republic,Please click above image to read the series.</p>
                      
                      
                   </div>
                   <div className="minibox">
                       <a>
                            <img target="_blank" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkLw0DaBU4BSSg8JPFcR99h6E70_txs60-_2KnVlQHZ5seze6UVf9T7CLl7cnzgzpQpXE&usqp=CAU" width="65px" heght="250px"></img>

                       </a>
                       <p>This series we are going to cover about Egypt Empire as well as
                       Egypt Republic,Please click above image to read the series.</p>
                      
                      
                   </div>
                </div>
                <div className= "footer">

</div>
               </div>

              
               
                
            </div>
        )
    }
}

export default FixedWebsite
