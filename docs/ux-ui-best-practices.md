# UX and UI Best Practices

A working reference for padding, contrast, legibility, hierarchy, color, layout, and the rest of the craft decisions that make interfaces feel considered.

---

## 1. Spacing and Padding

**Use a spacing scale, not arbitrary numbers.**
Pick a base unit (4px or 8px is standard) and derive every value from it. A scale like 4, 8, 12, 16, 24, 32, 48, 64, 96 removes guesswork and produces visual rhythm. Avoid values like 7px, 13px, or 22px that do not sit on the scale.

**Padding comes before margin.**
Inside a component, control space with padding. Between components, control space with margin or gap. Mixing them on the same axis creates layouts that break the moment a component is reused.

**Respect the rule of proximity.**
Related elements sit close, unrelated elements sit apart. If a label describes an input, the gap between them should be smaller than the gap separating that field from the next field. Readers parse groupings from spacing before they read a single word.

**Give content room to breathe.**
As a rule of thumb, the padding inside a card or container should be at least as large as the space between lines of text inside it. Cramped containers make professional content look like spam.

**Scale padding with container size.**
A button uses 8 to 16px of horizontal padding. A card uses 16 to 32px. A page section uses 48 to 96px on desktop. Small components with big padding look bloated. Big sections with small padding look restless.

**Maintain consistent vertical rhythm.**
Stack related content with the same vertical gap. When sections vary, vary them in deliberate steps on the scale, not by a few pixels.

**Use negative space as a design element.**
Empty space is not wasted space. It directs attention, creates hierarchy, and communicates confidence. Premium products use more whitespace than cluttered ones.

---

## 2. Contrast

**Meet WCAG contrast minimums, then exceed them.**
Normal text needs at least 4.5:1 contrast against its background. Large text (18pt, or 14pt bold) needs at least 3:1. UI elements and graphical objects need at least 3:1. WCAG AAA pushes these to 7:1 and 4.5:1. Aim for AA on everything and AAA on body copy when possible.

**Do not rely on color alone.**
Any information conveyed by color needs a second signal. Error states use color plus an icon plus a label. Links are color plus underline or weight. About 8% of men have some form of color vision deficiency. Respect them.

**Contrast is a hierarchy tool.**
Primary actions should have the highest contrast on the page. Secondary actions lower. Tertiary actions lower still. When everything is high contrast, nothing reads as primary.

**Watch low-contrast trends.**
Gray on gray looks elegant in a mockup and unreadable in daylight on a phone screen. Test designs in bright light and on cheap displays before shipping.

**Use contrast to separate layers.**
Background, surface, elevated surface, and modal should each have a distinguishable contrast step. Users read depth from these shifts.

---

## 3. Legibility and Typography

**Use a comfortable body size.**
16px is the web default for a reason. Do not go below 14px for body copy. Mobile can tolerate 15 to 17px depending on font. For dense data tables, 13px is a floor.

**Keep line length readable.**
Aim for 50 to 75 characters per line for body copy, 45 to 90 as the outer range. Lines longer than 90 characters tire the eye. Lines shorter than 40 break flow.

**Set line height by content density.**
Body copy reads well at 1.4 to 1.6. Headings tighten to 1.1 to 1.3. UI labels sit around 1.2. Dense data tables can go to 1.3. Never set line height below 1.

**Pick fonts designed for screens.**
Inter, IBM Plex Sans, SF Pro, Roboto, and Source Sans are built for rendering at small sizes. Display fonts belong in display roles only.

**Limit font families and weights.**
One or two families is enough for most products. Three weights within a family is usually sufficient: regular, medium or semibold, and bold. Extra weights without a purpose add weight to the download and noise to the design.

**Establish a type scale.**
Use a modular scale (for example, 1.125, 1.2, 1.25, or 1.333) so sizes step predictably. A scale like 12, 14, 16, 18, 20, 24, 30, 36, 48, 60 works for most products.

**Avoid all caps for anything long.**
All caps slows reading because word shapes flatten. Use it for short labels and tiny UI tags only.

**Respect hyphenation and justification.**
Left-aligned ragged right is the safest setting for most interfaces. Full justification creates rivers of whitespace unless you have proper hyphenation control.

**Use numerals intentionally.**
Tabular numerals keep columns aligned in tables and financial data. Proportional numerals read better in running prose. Most modern fonts offer both.

---

## 4. Color

**Define a palette before you define components.**
A solid palette has a primary, a secondary (optional), a neutral ramp of at least 9 steps from near-white to near-black, and semantic colors for success, warning, error, and info. Derive tints and shades from base colors, do not pick new colors each time.

**Use the 60/30/10 rule as a starting point.**
About 60% neutral, 30% secondary, 10% accent. Bright colors become pollution if they cover too much surface.

**Reserve saturation for intent.**
Vivid color signals action or status. If the whole page is saturated, the call to action has nothing left to say.

**Design for light and dark modes from the start.**
Dark mode is not inverted light mode. Background black (#000) with white text is harsh. Use a near-black (#0F1419, #121212) and soft off-white text. Reduce saturation in dark mode; bright accents buzz on dark backgrounds.

**Test color in context.**
A color that works on white can fail on gray. A color that works on desktop can shift on an OLED phone. Mock states and surfaces before locking palette choices.

---

## 5. Hierarchy and Visual Weight

**Hierarchy is the answer to: what should the user do first.**
If a user cannot name the single most important action on a screen in one second, the hierarchy is failing. Size, weight, color, position, and whitespace are the tools you have.

**One primary action per screen.**
Two primary actions mean two equal choices, which is usually zero choices. If both truly matter, consider sequencing instead of parallel options.

**Size communicates importance. So does position.**
Top-left and center get more attention in left-to-right languages. Use this deliberately, not habitually.

**Use weight before size.**
A 16px semibold label and a 24px light label feel similar. Changing weight changes emphasis without breaking the grid.

**Group and separate with clear visual edges.**
Cards, dividers, and background shifts are all legitimate. Pick one pattern per context and stay consistent.

---

## 6. Layout and Grid

**Align to a grid.**
8-column, 12-column, and 16-column grids are common. A 12-column grid is the most flexible — it divides cleanly into 2, 3, 4, and 6.

**Align consistently.**
Left edges of labels. Left edges of input fields. Right edges of numeric columns. Consistency in alignment is what makes a layout feel calm.

**Use a container max width.**
Beyond 1280 to 1440px, most content becomes hard to scan. Cap the content width and let the page background fill the rest of the viewport.

**Respect the F-pattern and the Z-pattern.**
Users scan content in predictable paths. Put key information along those paths. Long content pages read in an F-pattern. Sparse landing pages read in a Z-pattern.

**Responsive breakpoints are ranges, not pixels.**
Standard breakpoints sit around 640, 768, 1024, 1280, 1536. Design for the content, then adjust the breakpoint so the layout breaks gracefully, not the other way around.

**Avoid fixed heights.**
Content is unpredictable. Use min-height, not height, for anything containing text.

---

## 7. Buttons and Calls to Action

**Label buttons with the outcome.**
"Save changes" beats "OK." "Send invoice" beats "Submit." The label should finish the sentence "When I click this, the system will..."

**Give buttons clear hit areas.**
Minimum 44x44px on touch. Minimum 32px tall on desktop. Inline text links can be smaller but should still have padded click zones.

**Use three levels of emphasis.**
Primary (filled, accent color). Secondary (outlined or muted fill). Tertiary (text only). Every screen should have at most one primary.

**Show state, always.**
Default, hover, focus, active, disabled, loading. Missing states are where products feel unfinished.

**Loading buttons should be honest.**
A spinner without progress is acceptable for under 3 seconds. Longer operations need a progress bar, a percentage, or a status message.

---

## 8. Forms

**One column beats two columns for most forms.**
Two columns force the eye to zigzag. One column reads top to bottom and is faster on mobile.

**Label above the input.**
Top-aligned labels are read faster and translate better. Inline labels disappear on focus and confuse users. Placeholder-only labels are an accessibility problem.

**Group related fields.**
Contact info, billing info, shipping info. Use spacing and subheads, not boxes, to group.

**Make required fields obvious.**
Mark optional fields with "(optional)" if the majority are required. Mark required with an asterisk if the majority are optional. Either way, be explicit.

**Validate inline, after blur.**
Show errors as the user leaves the field, not as they type and not only on submit. Never validate on every keystroke.

**Write error messages that help.**
"Please enter a valid email" is unhelpful. "Email must include @ and a domain" is specific. "Password must be 8+ characters with one number" tells the user exactly what to do.

**Default smart values.**
Pre-fill what you can. Infer country from IP. Preselect the most common option. Every field the user does not have to touch is a win.

**Preserve input on error.**
Never clear a form after a failed submission. Losing work is the fastest way to lose a user.

---

## 9. Touch Targets and Input Comfort

**Minimum touch target: 44x44px (iOS) or 48x48dp (Android).**
Smaller targets lead to mis-taps. Space targets at least 8px apart to prevent accidental activation.

**Thumb zones matter.**
On a phone held one-handed, the top corners are the hardest to reach. Put destructive or secondary actions there. Put primary actions in the bottom center or bottom right.

**Keyboard users need a visible focus state.**
Do not remove the default focus ring unless you replace it with something equally visible. Focus states are not a mouse-only concern.

---

## 10. Accessibility

**Design for keyboard, screen reader, and touch from the start.**
Retrofitting accessibility is painful and incomplete. Tab order should follow reading order. Interactive elements need visible focus. Images need alt text. Videos need captions.

**Structure content with semantic HTML.**
Heading levels in order (h1, h2, h3, not h1, h3, h5). Buttons for actions, links for navigation. Lists for lists. Labels tied to inputs. Screen readers rely on this.

**Support motion reduction.**
Respect prefers-reduced-motion. Animations that move large areas of the screen can trigger vestibular symptoms in some users.

**Never disable pinch-to-zoom.**
It breaks accessibility for users with low vision and offers no meaningful security benefit.

**Test with real assistive tech.**
Automated checkers catch 30 to 40% of issues. A screen reader pass catches the rest.

---

## 11. Motion and Feedback

**Motion has a purpose or it does not appear.**
Useful motion shows state changes, guides attention, or signals hierarchy. Decorative motion distracts.

**Keep durations short.**
Micro-interactions: 100 to 200ms. Layout changes: 200 to 400ms. Nothing in a productivity interface should last longer than 500ms.

**Easing is not linear.**
Linear motion feels robotic. Use ease-out for things entering, ease-in for things leaving, and ease-in-out for things moving within the interface.

**Every user action deserves feedback within 100ms.**
If the system cannot complete the action that fast, show a visual acknowledgment within that window, then handle the work.

**Loading, empty, error, and success states are first-class design work.**
Empty states especially. A thoughtful empty state teaches users how to use the product.

---

## 12. Iconography

**Icons support labels, they do not replace them.**
A labeled icon is understood faster than either alone. Icon-only navigation items must be well understood (home, search, profile) or they turn into guesswork.

**Use a single icon set.**
Mixing icon libraries produces inconsistent stroke width, corner radius, and metaphor. Pick one family (Phosphor, Lucide, Heroicons, custom) and commit.

**Match stroke weight to type weight.**
A 1.5px icon stroke pairs with regular type. A 2px stroke pairs with medium or semibold type. Mismatched weights make icons feel bolted on.

**Size icons on your type scale.**
16, 20, 24 for most UI. Icons the same size as the cap height of nearby text feel integrated.

---

## 13. Consistency

**A component is drawn once, used everywhere.**
Buttons, inputs, cards, and modals should live in a library. Every off-library variation is a future bug and a future inconsistency.

**Behave the same in similar contexts.**
A card that expands on click in one place should not navigate on click elsewhere. Users carry mental models from screen to screen.

**Name things consistently.**
Delete, remove, archive, trash are four different concepts. Pick one verb per action and use it everywhere.

**Document the system.**
Even an internal doc with a few examples prevents drift. Undocumented systems erode.

---

## 14. Information Density

**Match density to task.**
Dashboards can be dense. Onboarding should be sparse. Financial tables are dense by necessity. Marketing pages earn their keep with restraint.

**Give the eye anchor points in dense layouts.**
Zebra striping, subtle dividers, group headers. Without anchors, dense tables become visual static.

**Paginate, filter, or progressively disclose.**
If a list exceeds what a user can hold in mind, it needs a tool to narrow it down. Infinite scroll is for discovery, pagination is for reference.

---

## 15. Images and Media

**Photography should serve the message.**
A hero image that does not reinforce the value of the page is decoration. Use photos that show real context, real products, real people. Stock photos of diverse people smiling at laptops stopped convincing anyone years ago.

**Optimize aggressively.**
Use modern formats (WebP, AVIF). Serve responsive sizes. Lazy-load below the fold. Image weight is still the top cause of slow mobile pages.

**Respect aspect ratios.**
Lock aspect ratios in CSS so layouts do not shift when images load. Content layout shift is a measurable UX problem.

**Consider dark-mode versions.**
A logo or screenshot that works on white can vanish on black. Ship both when it matters.

---

## 16. Content and Microcopy

**Write in the active voice.**
"Update your address" reads better than "Your address can be updated."

**Use the user's language, not the product's.**
"Start free trial" beats "Begin subscription onboarding." Jargon creates distance.

**Keep headlines short and declarative.**
A headline under 12 words with a real claim beats a longer headline with a hedged claim.

**Labels should promise outcomes.**
"Get the guide" is stronger than "Submit." The label is the promise, the result is the payoff.

**Sentence case for most UI copy.**
Title Case For Every Label Feels Shouty. Reserve it for proper nouns and product names.

---

## 17. Performance as a UX Feature

**Perceived performance matters more than measured performance.**
A 3-second load with a skeleton screen feels faster than a 2-second load with a blank screen. Optimistic UI, lazy loading, and prefetching bend perception.

**First contentful paint under 1.8 seconds, largest under 2.5 seconds.**
These are the Core Web Vitals thresholds. Beyond them, users lose patience.

**Every millisecond of latency above 100ms is perceptible.**
Feedback under 100ms feels instant. 100 to 300ms feels responsive. 300ms to 1s feels slow. Over 1s, the user has mentally moved on.

---

## 18. Mobile and Responsive

**Design mobile first.**
Constraints force prioritization. A layout that works on a 360px screen almost always scales up gracefully. The reverse is not true.

**Respect safe areas.**
Notches, home indicators, rounded corners, system gesture zones. Design inside the safe area, not on top of it.

**Test on real devices.**
Dev tools emulators miss real-world issues: touch accuracy, battery impact, network variability, system font scaling.

**Support dynamic type.**
iOS and Android let users scale system type. Layouts that break at 120% text scaling are not ready.

---

## 19. Trust and Credibility Signals

**Details signal care.**
Pixel alignment, consistent spacing, correct typography, and polished states add up to trust. Sloppy details read as "this product is sloppy."

**Show proof where claims are made.**
If you say "trusted by leading teams," show the logos. If you say "fast," show the benchmark. Claims without proof erode rather than build trust.

**Write honest error states.**
"Something went wrong" is less trustworthy than "We could not save your file because the connection dropped. Try again." Specificity earns trust.

---

## 20. The Editing Rule

**Design is what you leave out.**
After a first draft, cut 20% of the visual elements. Cut another 20% of the copy. Cut another 20% of the options. Most designs improve with every pass of deletion up to the point where the core job starts to suffer. Most designs ship before they reach that point.

---

## Quick Reference

| Topic | Target |
|-------|--------|
| Base spacing unit | 4 or 8px |
| Body text size | 16px web, 15 to 17px mobile |
| Line height, body | 1.4 to 1.6 |
| Line length | 50 to 75 characters |
| Contrast, body | 4.5:1 minimum, 7:1 preferred |
| Contrast, UI objects | 3:1 minimum |
| Touch target | 44x44px minimum |
| Max content width | 1280 to 1440px |
| Interaction feedback | Under 100ms |
| Micro-animation duration | 100 to 200ms |
| Largest contentful paint | Under 2.5 seconds |
| Font weights in use | Two or three |
| Primary actions per screen | One |
| Neutral color ramp steps | At least 9 |

---

A list like this is a starting point, not a rulebook. Every good rule has a context where breaking it is the right call. Know the rule, then know the reason to break it.
