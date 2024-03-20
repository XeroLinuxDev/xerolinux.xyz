/**
 * SpinsHome component, displaying the main structure of the home page.
 *
 * The component structure is designed as follows:
 * - SpinsGallery: A component responsible for displaying the gallery.
 * - SpinsIntroduction: A component for displaying the introduction text/content.
 * - SpinsSelection: A component for displaying/selecting spin options.
 * - SpinsReasons: A component for displaying reasons or statistical data, or any closing notes.
 *
 * This is a functional component (i.e., a component function that returns a JSX element).
 * Each of these components must be properly exported from their respective files.
 *
 * @returns {JSX.Element} A `div` element with className "Home", containing a series of other components (`SpinsGallery`, `SpinsIntroduction`, `SpinsSelection`, `SpinsReasons`).
 */
//My notes above
import SpinsGallery from "./SpinsGallery"
import SpinsIntroduction from "./SpinsIntro"
import SpinsSelection from "./SpinsSelection"
import SpinsReasons from "./SpinsOutro";

const SpinsHome = () => {
  
    return (
      <div className="Home">
        <SpinsGallery />
        <SpinsIntroduction />
        <SpinsSelection />
        <SpinsReasons />
      </div>
    );
  };

  
  export default SpinsHome;