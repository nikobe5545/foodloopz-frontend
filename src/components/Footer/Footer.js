import React from "react";

const Footer = () => {
    return (
        <footer>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active pr-3">
                        <a className="navbar-brand" href="/"><img
                            src="/images/foodloopz_logo.webp"
                            alt="FOODLOOPZ"/></a>
                    </li>
                    <li className="nav-item active pr-3 pt-3">
                        <a className="nav-link" href="#">FAQ</a>
                    </li>
                    <li className="nav-item active pr-3 pt-3">
                        <a className="nav-link" href="#">VILLKOR</a>
                    </li>
                    <li className="nav-item active pr-3 pt-3">
                        <a className="nav-link" href="#">PRESS</a>
                    </li>
                    <li className="nav-item active pr-3 pt-3">
                        <a className="nav-link" href="#">KONTAKT</a>
                    </li>
                    <li className="nav-item active pr-3 pt-3">
                        <a className="nav-link" href="#">REGISTRERA</a>
                    </li>
                    <li className="nav-item active pt-3">
                        <a className="nav-link" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="30" height="30" viewBox="0 0 228 228">
                                <image xlinkHref="data:img/png;base64,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" x="7" y="8" width="213" height="213"/>
                            </svg>

                        </a>
                    </li>
                    <li className="nav-item active pt-3">
                        <a className="nav-link" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="30" height="30" viewBox="0 0 228 228">
                                <image xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAANUAAADVCAMAAAD3nkWxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC3FBMVEUAAAA+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl0+Rl1LUWZRVmxZXHFDSmBWWm+Pjp7Hxs7t7PD////n5+u4tcCJiJhOU2loaXzJx9D9/f28usVaXnNGTWOysLukoq9PVGrZ2N/PzdVJT2VITmXb2uFES2G1s76ko7B2doj+/v9jZXlASF/f3uTAvsh3d4pVWW6Li5tAR1709PbDwcvn5upiZHhnaHxQVmtXW3FMUmdFS2L9/P36+vvS0NjQz9eWlaSVlKNSV2y7ucSwrrpaXXLy8fROVGl1dYi6uMONjJxCSV+3tcD8+/yCgZM/R12Hhpf08/bY1t1fYXaQj5/h4OV/fpCAf5Gdm6mzsby8usTIxs/Ewsutq7dzc4ZuboFXW2+Lipq6uMLk4+ji4ebBv8mZmKZwcINITmSEg5SKiZl+fY9vb4JDSmFGTGJJUGbGxM1cX3Sdm6r19ff5+fqurLhYXHGDgpPw7/JdYHTl5Oi/vcdpan729vjc2+FUWG339/jz8vTj4+dNUmjLydJ8e41oan3f3eOIh5js6++DgpTX1dysqrZ8fI5eYXVQVWt6eYupp7Tv7vJrbH+bmqhaXnJgYnZBSF9iZXmBgJHKyNGfnqxkZnrq6e3m5upRVmvV1Nvb2d9lZ3vMy9Pd3OJsbYHNy9Pp6OwAAAAB3VCBAAAAVXRSTlMAFzhYeIyhtcjb6PABIlB+rNX2EUqGwfMKTJT+I3K5+M0SbkCkDG3ZGe8knvoenPyYCXv1VuApwgZ/+TnUis9oDa3XU4SmwyfkLes38Vd8GqMW2udxdumoPwAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAomSURBVHja3Z35e1TVGccnySQZmJkkM8lkX0hC9oUkJCEBAmEJm0speIsb1wWjFoXa2tQFARfQQsFdVFBrLaVFu0i1qFQrdW8VF6S1uHSzi9a2tv0LmmEy4yz3LO+955z3ON/f8jz3nLyf554595z3vOd9XS6JysjMcmfn5HomTfZ6jbC83smTPLk52e6szAyZ/1iOfP68/IJA0KApGCjIz/P7sE3lVGFRqLjE4FVJcaioENtkhkrLygMV3ERRVQTKy0qxTSepsqq6BkwUVU11VSU2gAWSe4ptoqimuLUCq63zOEaKyFNXiw0Tka9+qv2BZzEUp9bjz4sNjU0CkSJqamxAZWoOtQhnCqsl1IzG1NrWLoUprPa2VhSmjs5p0pjCmtbZoZypuUvee4q9ry6147C7Z7p0prCm93Srg+rtU8IUVl+vIqb+GcqYwprRr4BpYHCmUijDmDk4IBtq1mzFTGHNniX3RQ3B9xkiVDEk8XX1z0FhCmuOtF/X3KBz62wrOFcK0/A8RKaw5g1LGH3zkaEMY77wUbiA38EiTyULhDL5FmIDTWihwB3lwAg2TUwjwqb42kXYLHFaJMix4Re/h3eiJr8IqMVLsDmStGSxc6ily7ApUrRsqVOok+S4W5yp5SSHUCdjE1jqZEdYS3V8U2G1OBiEi/X7TUW1zPaU4ddt9ovXEpsTfK1e36lkNdn6HA/otKKw0iIbiyffCLbVTI3Al7q6rNJpWgiFWoBtMZeA+61+HTaJbJWAdsfDPNv5L606fdUZyFjzhwFUTMfLmWedvdoM65xzzzsfE2seP9RcRldrLjDjNHrhRYhY3A61frrf7+Ivm0kaXYs3EoOcP60Buof2kkvNVK1bj4Y1h+9jPETt5CuXmVZa91U0rCEeqFn0A4Kvmda6HI2qguPEZIB+lPN1ApQ59g00rNnsMThI7eCKK0lU5lVoVMYgc/6jnyRebZK1AY1qJmseZJz5XkihugaNyphBh+qlt964iUK1GY/KOIUG1d1Hb7yBAmVei0jVR4vL6GE0vo5GZeJ9sgzjVDJUMyvi5Xoq1Q2IVNPJwUFdrLZbqFRbEamMLhJUBzPg6sabKFDfvAKTqp0UodbJbruNQrUdE8owOq2hWjni/b5FodqBSzXNOkyyjaPpzjEi1NhOXCqjzXIC5ApjvJlIdQsylNH+BQuqEFfTW0nzxW23Y1MZoVSoBs5DnR0EqjuwmcaPf1IDxhs5m2680xLqLmyksBqToXzcByC77k5luudebKATakp2vNfzt929574kqPsfwOaZUH0S1XJI4/XffjCe6Tuoi4p4TU2EqoVeYDnzoe/u/d6+fd//wXm3YqPEqSbxpK4O2x5BqkugEnV/ClueeKhKbGuEKf62nRvbGGFyx1E5v5Ooi6ak4wCMH4JV2KYIVFWMqhrbFIGqjkKVirxDakc3brl+//79D1+3c5fzvmqit8TLMIke+eGPfhxbfI3+5NEDP73YWYdlE1TlgDaPPf6zBO05OKEnnkx47qk1JMWvsA5dY3HGd9PPHz/kgKp8gioAaLOWuMNfk/Dc08Tnbo49s/6ZXxCeefbwL21TBSJQhZDbR2S/BZRq93PPm2SN7bXrMaiIJJYogrQRRrX1UZOuTXt228MqArhhBFO98KLJ1EuP2aKKOGWKEahefoUNZZq/+rUdquITHgtQIJYYqpdf5YEaPxKzcypbEvZe+EFNhFC98BoflGkeed0GVjgiN0851dZzeKFMc5uNWKK8cap81VQbz+aHshWdkj9OVaCY6o03IVCm+RaYqgC4shBBZdJO9ix0FLzkDa8uYNdlBVBB9TaUKuhyfRHWAoHq2JMwEw0jw5WpPZX5GyhVpitLf6rfQqmyoE4zDCoTejjhdmV/DqieAVJlu3I+B1RXAqlyXLl4VKvf+d3xS9696L33j7GeXAUzMhd6biCO6sGDsc/rrocYK8ODMCM9rhU4VKMHEpatqTHyCToMM3KSayUK1Qe/T+74D7THj8KMnOzyYlCt/mNqz2spz489BTLSi0L17J8sev7zdkqLD4FUMCgxVH+x7PoBcowUdNGEQfVXgkvsJXKTv+lP9XdC30+Qm9ytPdU2Ut9nbCK2Wac91VnEzjcT23wEpFI/Bx4ndn6A2OZVkJEIM/so2RdGuYWyEUalfG3xMbnz42QqkMt9svp14KXkzg+Rqf4BMXKS+jX7J5Te7yG2Au1FPOr3VzSqj8RQ5arfC9OojoihylHvt6BR/ZPYCnTROlu9j4lG9Qmx1dMQI93q/YEKqLLU+24VUGWq97MroMpQfyZij+pfABuDCOdX9qjWGPwKIJw1yqcqQDgXlk+Vj3CGL58qDyHeQj6VHyE2RjrVidgY1XFM0qmKMWLOpFOFMOIDpVMVYcRyyqaaiOUErS70pwrYiJHWn6rcRjy7XKp/C6CKxrND7h7IpdrnnCp29wByT0R7qtg9EddpulBt4+ydos/u9ADuX8mlEjBbxF0B5L8rpztV3F05gPtMd6r4e438Q1B3qoSKj9xnCJpTJdwX5r/brTlV4t1u7nv4elMl3cPnzpmgN1VSzgTu/BZ6UyXnt+DNRaI1VUouEt68MVpTpeSN4c3xozOVRY4fTqeMzlQW+Zgc585Cp2q3TCHIk+dMMtWnTqgs85xx5aRDO8NnUxFy0vHkD9SYipA/kCPXo2yqo/apiLke2Xk5DWOvVKoLiK1OZxnWRYJi51A1jP9cu+m2qJ4/Eqf/bkl4bsM+kt6h9P7wp9G+XzzR6f8m/jp2mHV7nZJDlZnvVl/1kKGYuYm1FTU3MSuPtLZiVIxWW+dZlBg5v1n52fUUMz87I5e+nmLm0mfVPdBRHHUPWDUq9BNPjQpWPRH9xFVPhFX7RTdx1n5h1enRS7x1etg1lXQSoEg5duFxfgHqX/HVKtNBoFpl6VlXLk1rAKZpvcY0ra2ZnnVQ07RmbZrWF07TWtBpWrc7TWusj2Pp+LZaHEKND0L9flvLHA2/iBbrNhMucTBRfCa/Xt+tJttTeqJqdVplLLL58U3VwAg2S0wjtpZJ1vLpsoJfaGNBS9ECHbaRJeD9FEv9+Jv++cCdL4+GsV0084bFQ41rLqafMAhwkQFHIZ5Xd46E0RfVwBDO0ULFkMAJ3UKzMA6CZnOdejh6XYOqTyNnDsp9URH1qz07niHxF5Wg3j5lTH29zs3lVXcPO4pGhKb3dDs3FqDmLq4gSUdq72p2bihQHZ088YT2Na2zw7mRNtTaJu99tbe1OjfQpppDcpw1LSH1Yy9eDY3i9/9NjQ3ODXMoX/1ykfWzapbXi90Z2lZtnah6j546YW4JEap0O68jOMVd6dwQ4WBV1faHYk11lYZIEZWWlQfge5WKQHlZqfN/LlWFRaFiftdNSXGoqBDbZE75/Hn5BQG6QyAYKMjP82sy30GUkZnlzs7J9axY6Y2kavV6V67w5OZku7MyM2T+4/8D9FHufoeHRW0AAAAASUVORK5CYII=" x="7" y="8" width="213" height="213"/>
                            </svg>

                        </a>
                    </li>
                    <li className="nav-item active pt-3">
                        <a className="nav-link" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="30" height="30" viewBox="0 0 228 228">
                                <image xlinkHref="data:img/png;base64,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" x="7" y="8" width="213" height="213"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="container-fluid bg-secondary ml-0 mr-0">
                <div className="row justify-content-between">
                    <div className="col-4">
                        <p className="font-trebuchet text-white">&copy; Foodloopz Sweden AB 2019</p>
                    </div>
                    <div className="col-4">
                        <p className="font-trebuchet text-white">Stolta medlemmar i Klimatpakten PLUS</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;