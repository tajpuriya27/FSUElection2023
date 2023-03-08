const Erc = [
  {
    id: "1",
    post: "member",
    fname: "Sher Bahadur Deuba",
    study: "BAG 4Th Year",
    phone: "9867438444",
    facebook: "tajpuriyasuneel",
    twitter: "@suneelhq",
    party: "NSU",
    logo: "party_img/nsu.png",
    image:
      "https://mofa.gov.np/wp-content/uploads/2021/07/Rt.-Hon.-Prime-Minister-Sher-Bahadur-Deuba-12x15-1-scaled.jpg",
  },
  {
    id: "2",
    fname: "KP Oli",
    post: "member",
    study: "BEL 4Th Year",
    phone: "9867438444",
    facebook: "tajpuriyasuneel",
    twitter: "@suneelhq",
    party: "ANNFSU",
    logo: "party_img/annfsu.png",
    image: "https://inseconline.org/en/wp-content/uploads/2020/03/KP-Oli.jpg",
  },
  {
    id: "3",
    post: "member",
    fname: "Puspa Kamal Dahal(Prachanda)",
    study: "BAG 4Th Year",
    phone: "9867438444",
    facebook: "tajpuriyasuneel",
    twitter: "@suneelhq",
    party: "ANNFSU(Revolutionary)",
    logo: "party_img/annfsu.png",
    image:
      "https://newsin.asia/wp-content/uploads/2016/08/Pushpa-Kamal-Dahal.jpg",
  },
  {
    id: "4",
    post: "president",
    fname: "Harka Sampang Rai",
    study: "BCT 4Th Year",
    phone: "9867438444",
    facebook: "tajpuriyasuneel",
    twitter: "@suneelhq",
    party: "Independent",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFRUYGBgYGBoYGBgYGRgYGBoYGRoZGRkYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHTQkJCs0MTQ0NDQxNDQxNTE0NDQ0NDY0NDQ0NDE0NTU9NDQ2PzQ0NDQ0NDQ0NDQxNDQ0NDQ0NP/AABEIASQArAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABBEAACAQIDBQUFBQcDAwUAAAABAgADEQQSIQUxQVFxBiJhgZETMqGxwUJSYnLRFCOCkqLh8AcVsjNTwhY0c5PS/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EAC0RAAMAAgEDAgQFBQEAAAAAAAABAgMRMQQSIUFREyJhcQUjgaHRQmKx4fAy/9oADAMBAAIRAxEAPwDqhMKEDBILDggggAIIcFoAFeAPBaVG3sd7NMi++40/Cp0LHx329eEqZdPSJqlK2yj7W7d0YJqlM2HJnvlzHwBNh/cTnrksSxNyTck7yZq9k+yrOwUlnQOvszYo6EC7IPtWsbrysRxtE2l2YdRnoXZd5Qnvj8t/fHh73XfFle32rhF9PGl3Vy/+0Z5ksbcfDX5TYdldiMzAMLM2r/gQHd1Og69JT7H2axfM6MCGsqEEFnvbceR+PSdS2VghRS2hc6u3M8h4Dh5njLhds9z59DPNffXw54XP8ExKYAAAsALADcANwihDvCvMyzN9pNi1K1RXphdFytmbLuNxbT8RlT/6YxHJP5v1E29esqKWdgqjeTuEz1ftfTBslNm8SQoPTefUCY1M73R6nTdT1ThTiW0voUlXs9iFBJQEAEmzLuHUypmpxHa3MpX2NswIvn3XFr+7MuDMbUr/AMnr9JfUUn8Za9iRhtnVnXMlNmW9ri1rjhvjx2TX/wCy/wDKZr+yaWwy+LOf62HyEVtHtBRpNkuXYb1QA5epJAv4XvNFint22cNfiGd5XESnpv39DE1Nn1VBLUqgA1JymwA4nSRJvX2xSrUKxQm4psSrCzAZTrvII6GYO0zyQlrTO7ouovL3LJOmjqd4VhyHoIIc7D5QEFoIIAH5wvP4QwITLACNj8alJczG5vZV4sd/pzM5jt7bDOzLnzEk52ta5+6Pwjd8Ja9rdsXJK7hdafj957cv7TJYTZ9R9bhRvu5IJ6AAk8vEmaU+ydLl8kYpWS+58Lj7jdEvmBS4Yd4FTlItrcNwtzmn2f2iasPZVcwciy1kUFvEulwDYfaHoZDwuCRVKkM1yLtfKbDgAD/lhHcLWpI5upAIALAgkKN4TTpa9/hMpSdeeDqytqW5W2ansvs5r+0bUKMiXJJuBYm55DT1mnCnl8ZQUO1uFRVWzoAAAMoIHmGN+svMLi0qLmRgwuQbcCDYgjeN0u629nLGNyvP6jwB5fERVjyhQ5JZlu2pe1Pfku1+WbTLfyvbzmXpUWdgqKWY7lG8/wCc50baNaktNvbZch0IYXv4AcT0mFp472VUvQBAsQBU72htfdY8BxPUzmyylW2z3vw7NbwuYnyt6foyUOy2JIvamPAvqOtlI+MS/ZjEj7Kno4+to9T7V4ge8KZH5WHxzS92Pt9K5yEZH4Am4bnlbifA69Y5WOvCFlz9diW6S19AqbvhsF3hZ1UgC4IDOxC6jQ6kTEU6TOwVQXZjoN7MTqdT5m5nQO0FAthqqjfbN/KQ1v6Zm+x1O9ct92mxHUso+V47ndKSOiyqMOTLr5tia2wK1Gk1UuoIRgyi57rCzDNxOt928DWUc2/a3FhaOS/eqEADwUgsfgB5zETPJqXpHb+H5MmSHkvlv9jqUEAh2nWfMBQQ7QWgAm9pmu1e3FRWQN3V9+29mO5B9f7GW+1scKSE/aOiDmefQf5vnI9v4zO+UG4Qkk78z/aPjy9ZrPyz3P8AQza76UL9fsTsLQasfavqCSEXhp/4jlx1v432FwdrMx3knyBUgeRX4yJh1CIirvVbnysPjr6xf7Q7WudVBsbd3eTYheY0/wAvOa3VPZ6MKIWkhdaiBcLYam17ngf88o2my84vl4geV9T6XPlGERgQbkqSbk6kXGp8Ta5kmjiGF8rHUEbzYXG+199j8YLZLafoV+I2e4K90jQHQGwtuHXdv5ybgcW9IoyEggC/IjUgNrqDma46HfLCtiAbA87jwHIjzPoIVEIN4AXfruKg23ektEuUzXbK2klZMw0ZdHQ71P1B4GTZg6mJNNzVpEXQC4B0ZSL203jd6zdowIBG4i46HURmFT2mD7R4w1K7AnuoSqjgLbz1J+AEY2Rsxq7EA5VW2Zt9r7gBxY2PTf1Vt+gUxDg/abMPENr87jymq7MUAuHUje5ZieZLED+kAeU5VPdb2e/mzrB0kvH6pf7F0Oz2HUWyZjzckk/QeQmY7S4anSqgUe6QMzAEnI1wVIv7p428AeMn9odqYhKjUwwVDYoyCzFSOLG9je40tumcv8dT15mPJUrwkT0ODK2st1tNcb3vfubzYm0WrUgzWzC6OLaZha5tyIINvGZfFrUwVctTtlYHJmF1KkglTYg3U2+HOaHshhitAsftsWX8uVVB88pPpLTaGzkrJkcXG8EaMp5qec17W5T9TgWaMOep1uW9NfQ53jMa9Vyzm5OmmgAG4AcBGLzQ7U7MGkjOjM5BFlC3NidT3dTYchM/u0Oh5HQ+k5rmk/J73T5sNz+XwjqVoIIU7mfIihEVqiopZjZVFyfARSmYrtZt4G6KboptYH33HM/dFj8+Vqidvzx6mWS+1aS23wim7TbdZySNGOiD7ic+p/zdMgUkivVLsWY3J3xqTkvufjj0OnBh+GvPlvy/ua/A94qeGQehXSTaSrw/Xx+sq6eIComUi+RGuP8A4wbfH5R5VOXMb3ANyeRyix43uOfCZHVtIujTphVGhub3FvyE3H57eciY10zNly6CzZbX5W8eUhIxsQeItY355uu/WJRGzC99WFzp43MSWmDbfoTcOgY21sSdePlw4QY/DEghdwJa3O4WwPTv+ole9wVbLa/eA10158D+sB2gwubgk3vfmWBv0tcWvKRm2vVB2ZF43PMcO5f5KPMzcdl8SKmHQX1TuHwyju/02HlMP+2KdW0G46X5X3cNZb9n8T7PEAA9yr3Da1s3vIfUlf45Zla2i/7RbJ9smZR+8TVfxDip+nj1Mjdk8epT2LaMhawOhK3J0B4gkgjwE0GYzO7f2KzH21G4casq6FiNzqRuYfHrvhpp9yN8WVXHwbelyn7P+Cdt/ZHt1GUgOp0LXsQfeBIB8D1Er8B2TVSDWbNbXIoIU+DE6keFhGtm9qWUZa6lraZlADaad5TYX8R6TRYDaNOsCabFstr3VlIve18wHIxJRT36l1XU9PHZ5U+6/kkDTdDBhwWmxwbCvCNJTvUHxi8sK0A37CYREO8j47GJSTO503ADex5D0iSbekJtStsre0WPNOnlU99+6vgv2m8OXn4Tk+0sdnfT3V0Xpxbz+VuUv+021i7Nr3m0YDcifcB5669TzmZajcXlZH2rtX6j6eHVPI19vsIV5MwOGLta9gNWO+3LzP8Am6QVpm4AGpNh1O6bbsrssOwQjuIM1Q/eP3b+J06A8YsWNVunwh9TmcJTPL4GBh9R6AeA0A9LSVWxSIrEsqgd25IUX3WuehlX2q2lkqvTW2Yu9hwAzsCWA4aWA49JX4OkXAdyWcg3J10JzEW3AajQaaTmt6Z2Y34SLEbRVmCqCTw0y/8AK1xv3DhJTM5se6BbjdvgLfOMphVIsyg9RuPMcpJFPS0zdbNlJDxFVyQCbeKqPreV1ak+tqmh4FE678vOXFZQBckASA+JTcDf5SppmdSiuq1XW98tib+7bUCwuQRb04xeB7RKCFa6MCGDHVcwNwS3DXmLeMcxSZhaZPFIUcqZvD2c2T5eD0qjBgGG5gCOhFxDtMN/px2tStTTDVTlrU0CoTuqIostj98CwI42uOIG5lGBUbW2Cla7A5X5gXB/MvHroZK2RgBRpquhPvOR9pjvPTcB4CToLQ7Uns1rNdQodeECHeFBAyDvBeFBKASVnPe1e3MxLA91bpT8Sfef4E9FHOX3afbAGakjAKB+8by1QHpv9Oc5ntLFGq1wLKuij5sfE6eg6zRL4c7fL4MF+dk7VwuRugjOSFF9Rc+LsEW58WYeskYkpmYJbIHbJxut7A5t5uAD5yMlRkR0Xc+XNv1ysHXjbQj4mSdkJ387C4TUcs9+71tYn0nPMu6SR35Mk44dPhFnsbAPe4Ul3GVFG+zak+BIHpc9OkbI2YKNMLvY95zza24eA3fHjIfZnZuRBUb33UH8qnUDqdCfISw23iXp4eq9O2dUbITuDW0YjjbfYam1uM6MlTK7J49fqzgxzV18W+XwvZHG9tVEfaWKKnMvtGF/FQqv5BgwHgBJYxWTcLzP7FokV2RrggMDfU3Ui9zxO+Xb4tKZFwWY7lUXPnynHk5PSw+JHk2y5NsgA53/ALSxp4q4vM/V2hVqH/2+Uc95PnLXAYckENpMnOjomtkPFA1GtfT4SQmzkUe/5XEaxGBJLd4geAufHSRv9iolr5HY8rWHLiY00TSfsSSOBlD2goWKtbwM09DZqoNx8AWJA6ayu21QzIeY1mkVqjLJO5IXY7DIcVhzUXMpqoPAEsApN9/eIPlO/CcH2azJkIHeQq69VYMPlO9GbJ7Oap7dBCKiYqUQFaCHCkgCFBeC8AOK7fxhLZM19cz+LE3sfM39JWU3iKuv6wKOcMlO62a4saxykiXh6TOwVRcn0AG8nwE3nZjs+rWLD92h1v8AbfiOnPyEreymxibA6Fu854qnBev1PhOkUkVVCqLKBYDkJrP5c/V/sjlyP41/2r92HlhwQGZGxxvaWzPYbSdPsnOynwdc3wzSfRwqk8vEWBlx2+wVq9GsOWUnpcEeYcfySnw9a05sz+Y7sC+UcbBjezM35j9IdFRGMbjtyj7RAPTj8Ia4pV9Jkjo8Ide0doEEaSqxG1UU2JN+QBJ9AIinWYHMLgHhK0ye5FpiWlTj1ujRdbEkxKNcEcxKkyvyFs3C56lNOLOieRYAztBM572V2DX9rSqumVAFcPmU5gVuoABve5F7gWsfPoM6JRyZGm/AIcIRUoyBEu0OIqGAhBaJzQQpQjhj0yCQQQQbEHQgjeCJY7E2cajhiO4p0/E99FHPXf6SPgsMzv3ico7zsTqbndfmTfXrOqdmtmqiK7KAxAyLawROFhwJHw848cpLufH+Ss+Rt/Dnn1fsiTsbZxpJZvebvN4Hgt/D5kyzEUYUmqbe2TMqUkgQQoIiio7UYA1sO6oMzqQ6jiSLggeNifO05m7kE9Z2Kcy7SYH2WIcWsrsai9HJJ9GzDymWWfU6unv+kp0PeuekbfB0iSSqi/HjHnoFtzW8bXjD4DXvu/llHzUzFM6n5DVaSbrXPLWIqbQTdmH1izRoi4GdieZP0tF0KKjUKB0FpW0ZtDa3YX0jlPfE1anCJR7AnwMck0zsez1ApUwNwRB6KJKiE3DoIq86DiFCCEILwEHGnMWTGXMaEwiYUF4JQjK9m9ih7OxLIrEnMSTUfTMTfhoL87W5zZERrC0AiKi7lAHXmfM3PnHY7rufjj0Jxx2rb8t8sEBhExtnkaNBZMTmjZMEYDoMrNvbHXEplNlddUfkeIP4Tx8jwk8GLUyaSfIS2ntHJsRQek5R1Ksu8HlwIPEHnFCx3zTf6gotqTD3xmBHNDYgnoQbdTMUa05anTO+Mm52yayIIxVcDdIL1YhqhgpCrFO14un4xlATHlFpRmdE7MdrkrkUagCVAcike49tBv8AdY23cfhNZOG7CRmxaBb+8XNuAUFrnzsPOduo1Q6hhuI+O4jyII8p0Lg5a50OQAwQQEAyMTJDGR2lCYILwrwRiJAMO8TlhXtIKA5jcDGJCyhCoUBEQzgQFsXmjZrad31/SQ6LNU732Nw4Zv7eMlldImTsy/aqjmQueBUept9Zj3ozpGPwodGQ/aBEw1WiQSre8psevPod/nObNtPZ2dPSpOSmejGxSllVoxNPDGZ95v2EdKUUaZ5XJ3Aakk7gPGTGS00PZvZNwKzj8g8Pv+fDw14iXG6eiMlKJ2xvYGxvYqXb/qP734VG5AfiTxPQSz2ftg0sU+HbVXRaqcwwBR1HXJmt+bnH2NzMXtXFkbUpBfsPh6Z/jILfCsRPSw4lW19DzHb3s6tSqqw0Plxjkqka3hJtOqeOswaNFQ7UMZMW7XEagMEVEwRgZ1f9QcPuai9+QKH178fbt3hbgMlVb7rpe/8AKTzE5liMVoBqwtpbNewsSu/dofPpGaCOzL7NQzM4ABJJLsQAMxvpcgXOne8pzq6J2dj2Xt/DYksKJdinv3R1C8gSwAueW8yex5f3lfsLZiYeglJbXXV2H2nb3m8BfQDgABwk8nWbIGyOdXI5DWM4l1uEIPe3hfkTfQRzPqx8bk/ACIKalvD5xk7Ef7xhlFjVQW0y/aFuAS1/QTO9psdia9NkwavTBUk1jdGNhcKg95b89Dy5zSUMCg7xUX3yRkgBmOzna3DYmmgLqlUIM6OcpuqjMyMdGXQnnzAk7aWzFqLmFlci6tzB1APNfkSSPHmdHBDD7SCH3VxBQfkq3RP6Kizo64OrTs9IllHv0iTlI+8n3W6b+R0m2fAlr2a2EW09rkzT0CCQwsQbEHeDB7MCaDaFJKqe0TR1HeVrKSo4G+lxwPlx0prW13twA3DxJ4nkB1vwnmvC+7SPRnqp7Nvn2HsPg6aWfEutNNCqal246oNQPDfztCrdsiayoiAYc9xmYEPqbZxY2VRppqbX3bhEpbLzte3UyW2wlI/tOyImFo8/JlrI9sv6S3M59sV/2naQce77Rqv8CaUz6imPOaHbm0zRwjob+0cCkjcw4IZ78wgbzIMif6a4D/qViN5FJNOCjO9vC/sv5TPQwrsw1fv4Rh/Vo3jrqPSPk2jdUadCIeI3qvNgPIamcLNR1X010gJhkSJiapGYD7OUebH6XBiLTJQMOR3dlBKgE20DaAnhc8Osyb9vKikq1BKbAkMjmoWUgkEHKLcJLaXIbMPiMJkds4AGYhTnABAJNj9rgd9j5mXf+nOCFTEGoQctJQ1iAe+91QX6B23D3Vml2lsXDY5EcjJUZEYshPK9nF+8LEg7j46Sf2a2R+zIyZlYs7OSq5Bayqq28APVjMpnTBzou0fv2/Df4mLbfIr1gCp4r73RjJJOs2JIrpdgnLvP14CPst2A4CJww99ubW8hpJFNba84AGYlhFLCcQA5v/qBg/Z16OJHFlVvz0znRupUEfwCdDKC56n5zP8AbfAiphKgI9wBx4ZfeI/gL+sl9m9qjE0g+517rryb9DvHWdVN3hT9toz4ph7SwmdrKLaXb8R4X9I1g9nAC7LbjrvtvlxTpw66gKx5KT6Amc49ECjgwAOgv14x32AkwrKLtdtf9mw7MptUfuU/BiNX/hGvXKOMqId0pXLB+FswPbraAqYn2ad4UhksONViM4HO1kTqrToXZjZrUaFNGCjIp9292Z2zMxB3G5I3+m6YLsFsf22IzuLpR7xvrdz7oJO/n6Tq07OrpSpxT6c/cmFv5hLpe4jeIbvJ1PytH3NpDxPvpOA0JbGQKPeznnVt5Ibf+MnyFsv3FJ+0Wf8AmYkfAxDFYl7EL/n+aSnxewcPXY1KinN7pK1TTvl0GYDebWF+QA4SfiO/WCcNCx5DXSN4RgQTzZj8YNJ8gV+w2VVdmv8Auy/C5yC7Xso96wOg8pcUGPHfbXrpf6zO4YG9RNO9WpJbUZhcVKm7f3M38pl9Qbf+Un4iBpYVdjfwbMh8DlLofMgjraS6FS4VvwgnyFzGwlyRzAI8CpBB8jr5RnDv3XTioIPne0Zj6k/C+4o8L+uv1kk8oxTsB0jqGIocEIwQQAYxNAOrI3uupU9GBB+BnK+zu0HwmKyVNAW9lV5AgkB+gbjyYzrRnMv9RdmZK4rAd2qoDcs6i2v5kA/lad/ROabx1w1+5nfjydLSIxYujDmLepA+souxe1/2jDjMb1KZyPzNh3HP5l3nmGl/VOnmP1+k5LhxTl8opPa2BdZyPtjtM4nEnJ3kS9OmB9o37zD8zAW8FWbntdtb9nwzBTZ37iW3i477jllW9jzKzJ9hdj+1qmqw7lLQci5G4dB/yE7+klY4eavTwjO/LSRtuymyxh8MifabvOebGW7b4oRJnn3bunT5ZqloKud0i4rcDyb5x7FPoOsbxOqt0+UgY+X7t/CR8IQqKToAi+QCiE9T90T+E/AGQ8e5FJUG97D+FbXgA1h6hyvVPvMbL56D0EkYGh3Y1UWwVOWvnLHAJ3d3ExiMpsIs9V3IOUIr7zYvUBUac1RG/wDsl7QOtuYYfX6SF2co5cOhNiXu9xxDWyH+QIfOSicjgncT6HdEXT8kzN7rdDI+IpgVVIOro6kcwouG8ibfxeAj6ju25aRsUc9RHP2adQHzal/+T6xmZLd+8F56+UkoZX0HuzN42HQSYhiKQ+IZiA0BaABmU3aHZwr0mQ6X90/dYG6t6/C8ts0aIvLinLVLlEtbOXdkse2GxYR+6rk0agP2WzWUno+l+TGdSq37o/Fb+lj9Jzzt/sxVf2yfastQDnbuv1sLHovjNHS28TgFxNxnWk1zwNdf3I9Xa/Qzv6lLKpyzy/D+5nO02mYrtfjziMUypqqXpIOZUku3m19eSidC2BghQoUqQGoQM/i795ifPTymR7D7GzlqjjdZRffbQ+p09Ju8O1y5/EF/lA+pMjq8q0sU8L/I4XqySTEM2sJnjbPrOE0G6zd4eGsUGuG6H5SPUqd4xivXZaVRl3gAepAJ9CYALr3akEXezZB57z5C58oip36+nuoAB/npGNkV2Y3J7qggdSO8fTT+IyRgPdZ+LkkdOEADOpMusIllAlbg6N2knGY4U2y+F4DINJAqqBuFlHQAAfKLxNLMCIbpdfjDpG4ghMRh6l7X4jX8y6H6Hzgz2e34W+amNOhBNt57y/mG8eY+NpX4Otes9jcFSR4ju2Meidlrhd3rJqGV+GPdkxWklokBoTGMo0dgAYicusWsUgu1upjEV2O2cH97dclha+YMjIQeG4j0mLxmx6lJfYrc4dqwcMbG3d0pNx3jNfjlHG86S6zL9pMYFdKNveX2pN92R1RRbxzN/LNYyVPhEtItdjYMU0AHHU9YMKxykHQl3Ovixt8LR/Cv3FPgPlBWQTNvbKRl37cYXJn/AHpGdUsEXNdkdw1i47tkbxuN0ewHabD13NNGbMFzd5coIFr2NzcjMNOu+0wmM2PcYwKxzU8VTCLdVUK1WrQCtv0Cs2txuEc2JgWTFYVw9xVoLUta1jUo1RlPmhPnAZ0RnjyUc1J1+8GHqCBK8K0tcNVQIAxtx8dIaJ2UWyqpNJgN7ZUHV9T6D6TQimFQAcBYSl2FQsxBG56jW/iyr/SBNC63iY0OYGnYXlFtNg9RieHdHQf3vL7EVMiE8h8TulBTpXF40BdLhGtplOnBh9bRAwrqT3G8hm+UfR05D4x5FTgxHQydluUVuIQ21BBGouCPnKdcPlxAdfdZXuOTWufI7/WbJc3Bz56wMpPvBG6qIdwuwzVI9yTRLNsPT40Vt+HT5RLU6PJ16Zj+sA7SEgj4EeTDJ/3PUWPnHv2ReDj4frAO1kS0XQ3k+FvXU/IR84M8GHxEb/ZHB0ykfmN/iIxdrCczBdoXzY8LbT9nK38VdHIHM/vQf14b80X+58V/WZra2yKjVRUFNiFFTct2zEhABbWxRr/wdJU635E0ydspr0k/ziZMqSNgKTJSUMrKQdQQQd/jJTkSWCOebSpIr4/P7hfC1HzDMMpxtctpyt9YeDo2q4A6i2FpC2lv+lid/r8ZoNodnaTftTAsr4pUVzcEKUFkZV57ienCNHY6Z6NS7Z6CFE10ylcveHHS/rGmNk/LEVSI4IwyEtaMgXsr328Cf+UvlTWUWxBd6h5MR8TL8G0l8lIr9s1NFTmbn6RWDod0aSJWOeqbbgcvpLinT0jEQPZQCmeDGLEUIjUCI/B48vthuceYjax1GiDYsYiuPso3naOLiX40j5FT9YUFpJQTYkDej/yNb5RC4ykNwK3390j6R0EjcfgPpDJ5iPYBrtBPvfCOLjl5iRzTXkIk4deUNhomDFjmIoYoSAaAhGjFsNFkMUP8MBrqZWezMGQw7g0T2Smd6of4RG2wdI/YHkSPkZDKmGGaHcHaPNsqkdwYdHJ/5Xjf+xre4d/PIR8FETnaF+0OI+4Xag8DsQU81nvnYvqtrXN7aNH6uFfUqy3t3b3AvwJsDGBjXHCH/uL8Vh3B2oZwWyXQ3YqT4N+oEsPYNy+I/WRv9xPFPhB/uA+4YdwuxEO0MGM4esri6EMOakMPUR4SgaYeaKWpE5YYpwEmSUcER28ipTj4EQ0LgvBeCSUAQQXggMEImHCMADvBCgiABhQQjEAcTBCMAFaQXETCMAF3EFxG4UAOQ0d+mh5jQ+ssaO1K6+7WqdCxYejXEEEyk+lzRL9CYvarEKBco/5kA/4Wmu2LjGqrmYAflvb4kwQTong8XqYlcIsabmOgwQRs4UOCCCCSUCCCCIYIUEEABEwQRAGYUEEAAYUEEABCMEEAChwQQA//2Q==",
  },
  {
    id: "5",
    post: "member",
    fname: "Upendra Yadav",
    study: "BEL 3rd Year",
    phone: "9867438444",
    facebook: "tajpuriyasuneel",
    twitter: "@suneelhq",
    party: "Socialist",
    logo: "party_img/soci.png",
    image:
      "https://assets-generalelection2079.ekantipur.com/candidates/candidate-1668162645.png",
  },
  {
    id: "6",
    post: "member",
    fname: "Rajendra Lingden",
    study: "BEL 3rd Year",
    phone: "9867438444",
    facebook: "tajpuriyasuneel",
    twitter: "@suneelhq",
    party: "Democratic",
    logo: "party_img/democ.png",
    image:
      "https://onlineradionepal.gov.np/en/wp-content/uploads/sites/2/2023/01/candidate-1668166601.png",
  },
  {
    id: "7",
    post: "treasurer",
    fname: "Dummy",
    study: "BCT 3rd Year",
    phone: "9867438444",
    facebook: "tajpuriyasuneel",
    twitter: "@suneelhq",
    party: "NSU",
    logo: "party_img/nsu.png",
  },
  {
    id: "8",
    post: "secretary",
    fname: "Rajendra Lingden",
    study: "BCT 3rd Year",
    phone: "9867438444",
    facebook: "tajpuriyasuneel",
    twitter: "@suneelhq",
    party: "Democratic",
    logo: "party_img/democ.png",
    image:
      "https://i.pinimg.com/736x/c0/26/8e/c0268ef4da0b68d9acfdbf39b37d764a.jpg",
  },
  {
    id: "9",
    post: "president",
    fname: "Balen Shah",
    study: "BCE 4Th Year",
    phone: "9867438444",
    facebook: "tajpuriyasuneel",
    twitter: "@suneelhq",
    party: "Independent",
    image:
      "https://i.pinimg.com/736x/c0/26/8e/c0268ef4da0b68d9acfdbf39b37d764a.jpg",
  },
  {
    id: "10",
    post: "president",
    fname: "Sunil Kumar Tajpuriya",
    study: "BCT 4Th Year",
    phone: "9867438444",
    facebook: "tajpuriyasuneel",
    twitter: "@suneelhq",
    party: "Independent",
    image:
      "https://scontent.fbir1-1.fna.fbcdn.net/v/t1.6435-9/77244732_572837213289156_4662324739409182720_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vHHsgD-1ACIAX-ANhEE&_nc_ht=scontent.fbir1-1.fna&oh=00_AfAGZXbCrV8zOiMssX9jhieoNK6C1pJlNRsVLy8WJ7XxNg&oe=643032AB",
  },
  {
    id: "11",
    post: "treasurer",
    fname: "Dummy",
    study: "BAR 2nd Year",
    phone: "9867438444",
    facebook: "tajpuriyasuneel",
    twitter: "@suneelhq",
    party: "ANNFSU(Revolutionary)",
    logo: "party_img/annfsu.png",
    image:
      "https://i.pinimg.com/736x/c0/26/8e/c0268ef4da0b68d9acfdbf39b37d764a.jpg",
  },
  {
    id: "12",
    post: "secretary",
    fname: "Dummy",
    study: "BME 2nd Year",
    phone: "9867438444",
    facebook: "tajpuriyasuneel",
    twitter: "@suneelhq",
    party: "ANNFSU(Revolutionary)",
    logo: "party_img/annfsu.png",
  },
  {
    id: "13",
    post: "secretary",
    fname: "Dummy",
    study: "BEI 2nd Year",
    phone: "9867438444",
    facebook: "tajpuriyasuneel",
    twitter: "@suneelhq",
    party: "Socialist",
    logo: "party_img/soci.png",
  },
];

export default Erc.sort((a, b) => {
  if (a.fname < b.fname) {
    return -1;
  }
  if (a.fname > b.fname) {
    return 1;
  }
  return 0;
});
