## Design Decisions
- Folder Structures 
  1. the component folder stores all reusable react components. 
  2. The mapper-service, is used to map backend calls (snake_case) for the front end (camelCase)
  3. The pages, is used for the different pages that will be rendered for different routes in the future.
  4. The icons, are for the logos and svgs used throughout the application.
- Filter 
  1. A search filter was implemented for users to quickly find candidates by their name.
  2. A sort filter was created to order candidates by their credit score in ascending and descending order.
- Testing
  1. Cypress testing was used to ensure that the number of candidates received in the api call matched the number of candidate cards rendered.