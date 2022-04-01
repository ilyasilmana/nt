# NT

### How to generate stuff
```
npm run generate -- [component|page|api] [<file-name>|<path1/path...n/file-name>]
or
npm run g -- [c|p|api] [<file-name>|<path1/path...n/file-name>]
```
Params:
- `--default`: Generate component with `export default`.
- (Not usable yet) `--get|--post|--put|--delete`: Generate API page with described method.

---
### Example 1
```
npm run generate -- api about
```
Will generate an API page named "About" at:
```
+ /pages
+-- /api
    +-- /about.ts
```
---
### Example 2
```
npm run generate -- page about/index
```
Will generate a page named "About" at:
```
+ /pages
+-- /about
    +-- /index.tsx
```
---
### Example 3
```
npm run generate -- component about/bio
```
Will generate a component and css module named "Bio" with non-default export at:
```
+ /src
+-- /components
    +-- /about
        +-- /bio
            +-- /bio.tsx
            +-- /bio.module.css
```
