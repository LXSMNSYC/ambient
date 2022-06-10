import {Component} from "solid-js";

const Introduction: Component = () => {

  return(
    <>
      <h3>
        Ambient Color Generation Tool
      </h3>
      <p>
        This tool is designed to generate <strong>contrast ready</strong> color pallets built specifically for UIUX design. Unlike other pallete generation tools,
        Ambient generates the colors <strong>based on the primary color</strong>. Hues, saturation, and relative lightness adjustments are made automatically using
        our <a>algoorithm</a>. These values can be adjusted by adjusting the base functions.styled.tsx file located inside the styles folder.
        As ambient relies on the primary color for alternative color generation, primary colors <strong>must be contrast compliant</strong>. 
        Ambient displays both WACG and APCA definitions of text contrast, a 4.5:1(WACG) or 60Lc(APCA) is recommended for text contrast. Please remember that for the
        best results, contrast in colors or differences in color should not represent meaningful information in UIUX design to prevent accesability issues. 
      </p>
      <br/>
      <h4>
        Ambient Color generation Algorithm
      </h4>
      <h5>Legacy Generation Algorithm</h5>
      <p>The Legacy method of generating shades of color utilizes brightening and darkening of colors.
        This method of generating colors generates a relatively good palette for general shades, but the hue and saturation of shades generated from the primary color
        is perceived lower. The biggest issue with simply brigthening and darkening color is that <strong>the relative difference luminance of color shades</strong> are
        much smaller for brighter colors. For example, a shade step for a yellow color is percieved to be a lesser change compared to a darker color like blue. 
      </p>
      <br/>
      <h5>
        Relative Luminance Generation Algorithm
      </h5>
      <p>
        A New method of generating shades were devised by gaining the relative luminance (WCAG RGB Luminance) of shades and affecting the relative luminance for each 
        shades generated. The algorithm gets the relative luminance of the current primary color and adjusts each shades' luminance by a percentage point given by the 
        change array. The algorithm also decreases saturation for lighter colors and increases the saturation for darker colors maintaining relative saturation levels.
        Hues are also adjusted per color shade. The biggest issue with utilizing luminance as the only method of generating shades is that darker shades fail contrast 
        tests as relative luminance steps decrease in intensity in efforts of maintaining hue and saturation. 
      </p>
      <br/>
      <h5>
        Lab Color mix
      </h5>
      <p>
        The two methods are blended together at a ratio of 50:50 from the legacy generation method (for general shades) and the relative luminance method 
        to generate a average of the two methods using Lab color (to maintain saturation and hue adjustments).
      </p>
      <br/>
      <h5>
        Shade Correction
      </h5>
      <p>
        Now that all of the color shades are generated, a simple shade correction is done through mixing a black or white solid color depending on the 
        contrast of the color to generate UI usable color shade (ie. Toast background) taking in account for the minimum contrast ratios needed based on
        APAC (WCAG 3 standard) values.
      </p>
      <br/>
    </>
  )

}

export default Introduction;