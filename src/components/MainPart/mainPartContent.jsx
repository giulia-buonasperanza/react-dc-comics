import comics from "../../data/comics";
/*{
   id: 2,
   title: "American Vampire 1976 #1",
   description: "America is broken. Trust between the government and the American public has crumbled. Paranoia reigns supreme. It's 1976, and this is the concluding chapter of the Eisner Award-winning American Vampire! Skinner Sweet has exhausted all efforts to regain his lost immortality. With his powers and purpose gone, he is now determined to go out with a bang. At a seedy motorcycle rally in the desert where he's closer than ever to his death wish, Pearl Jones and a shocking partner track him down for one last, desperate mission: The force known as the Gray Trader and its minions are tunneling through the bowels of the world to unleash hell on Earth—just in time for America's bicentennial. With catastrophe looming, it's up to Skinner and Pearl to reconcile and change the course of history—or die trying. The series that launched the careers of superstars Scott Snyder and Rafael Albuquerque returns for nine final issues and the closing chapter of the legacy of American Vampire.",
   thumb: "https://imgs.search.brave.com/OU2E3_3vA7flyv-SJ3TcFW1d99KDlp5ZfmW9ylLLFDo/rs:fit:1012:1200:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnN1/cGVycG91dm9pci5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDcvQW1lcmlj/YW4tVmFtcGlyZS0x/OTc2LTAxLWNvdi1B/bGJ1cXVlcnF1ZS0y/MDIwLmpwZz9yZXNp/emU9MTAxMiUyQzE1/NTYmc3NsPTE",
   price: "$3.99",
   series: "American Vampire 1976",
   sale_date: "2020-10-06",
   type: "comic book",
   artists: ["Rafael Albuquerque"],
   writers: ["Scott Snyder"]
 }*/


function MainPartContent() {

    const comicsJsx = comics.map(comics => {
        const { id, title, thumb } = comics;
        return (<div key={id}>
            <img src={thumb} alt={title} />
            <span>{title.toUpperCase()}</span>
        </div>);
    });

    return (
        <div className="background-container">
            <div className="contentContainer">
                {comicsJsx}
            </div>
        </div>
    );
}

export default MainPartContent;