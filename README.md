# CalculatorJS
This is a basic calculator I built to demonstrate and exercise mobile-first, responsive design, while also using some more refined and advanced styling.

## Tech Stack
The app was built with **Typescript, React, and NextJS**, and deployed with **Vercel**. Styling was handled by **SCSS**, with version control being handled by **Git**.

## Goal
The goal of this app was to demonstrate responsive design, shown by having a mobile friendly format (swapped to when the viewport width dropped below 1200px). It was also used to practise some advanced styling features, like being able to cycle through colour themes by clicking on the title. This was a time-consuming feature to add, as I went through multiple potential solutions before arriving at the one present in the app today.

## Challenges
The main issues I overcame were implementing the theme switching, and organising the elements to fit on a mobile viewport. From a UX perspective, mobile users may not be aware that they can click on the title to change themes, footer to view the Git repository, or input field to clear the current calculation. It may be helpful to include some kind of legend or indication that these elements can be interacted with in the future. For desktop users, the cursor changing to a pointer was a handy way of showing users that they can interact with the elements on screen. One final touch would be to default the calculation field to nothing instead of zero, but that's a minor difference that probably wouldn't have too big of an impact.

## Hosting
The app is being hosted right now @ https://calculator-js-beta.vercel.app/  -- don't forget to check out the cycling themes!
