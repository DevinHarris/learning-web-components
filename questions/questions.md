
## Describe what a "sibling selector" is. Explain how it works and give an example of its usage.

>  A sibling selector is a CSS selector that selects the siblings (think brothers and sisters), of the current element that are also the children of the parent element. However, the element doesn't have to come immediately after the current element when using a standard sibling selector 

> Here's an example. This code will color all the `span` element that are siblings of the `child-el` element:

```
HTML:


<div class="parent">
	<p class="child-el">This is some text.</p>
	<h2>Even more text.</h2>
	<span>Hello, world!</span>
</div>


 CSS:

.child-el ~ span {
	color: red;
}

```

## Describe what a "next-sibling selector" is. Explain how it works and give an example of its usage.

> The "next-sibling" selector is similar to the stand "sibling selector", but it only selects the next immediate element after the current one. So positioning and the structure of your HTML document matters greatly here:

```
HTML:


<div class="parent">
	<p class="child-el">This is some text.</p>
	<h2>Even more text.</h2>
	<span>Hello, world!</span>
</div>


 CSS:

.child-el ~ h2 {
	color: red;
}

```

## Explain the function of the `margin` property and its variants `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`. Be sure to explain in detail the different values that this property takes and the effect of those values.

> Margin is a CSS property that helps you position elements on your web page. Using `margin` *pushes* elements away from each other so that have more breathing room or simply accommodate your design.

> People often confused `margin` and `padding` because if you're not using `background` or `borders` they can appear to be the same. However, it's important to note they do two completely different things. `Padding` moves elements within another element away from it's border, while margin moves the element way from other elements.

> Margin has 4 different variants, `margin-top`, `margin-right`, `margin-bottom`, `margin-left` which move the element *away* in the direction specified unless you use negative numbers, then it moves toward that direction.

> Here an example of using `margin-top`, which moves the element `.main` down 100px:

```
	.main {
		margin-top: 100px;
	}
```

## 4. Describe the function of the `top`, `left`, `right`, and `bottom` properties when positioning elements on a page.

>  `top`, `left`, `right`, and `bottom` properties are used anytime you want to ` position` elements using `fixed` or `absolute`. These properties are similar to `margin` and `padding` direction properties. 

> However, instead of moving the element away or adding breathing room between content and it's border these properties move elements out of their normal document flow and to the furthers most border of it's container.

> A common design style is having a static, or more accurately `fixed` navigation menu, here's how you create it using `position: fixed` and the `top` and `left` properties:

```
	nav {
		width: 100%;
		height: 70px;
		position: fixed;
		top: 0;
		left: 0;
	}
```

> This code places the `nav` element at the top of the page (or containing element) with no pixels between the top and left sides of the elements.

## 5. Explain the purpose and function of the `float` property in positioning elements. List and explain the different values this property can take. Give an example of how to use this property

> The `float` a CSS property used to position elements, usually side by side. 

> `float` has three values it can take: 

> 1. `float: left;`
> 2. `float: right;`
> 3. `float: none;`

> `float: left` moves your element the left most part of it's containing element, `float: right` does the same, but this time to the right side of the containing element, and `float: none` is the same as not applying the `float` property at all. The `float: none` property might come in handy if you ever need to stop or reset a float, for example, for responsive design purposes. 

> Floating elements can be very tricky. One common problem with floats is that other elements below floated elements suddenly appear behind them. To remedy this situation you'll need to `clear` the floated elements. 

> The `clear` property has four values:
> 1. `clear: left;`
> 2. `clear: right;`
> 3. `clear: both;`
> 4. `clear: none;`

> These `clear` properties "clear the float" on their respective sides.

> Here's an example of how to use the float property:

> Let's say you're building a website where you need a images and a comment box to appear side by side. A way to do this is to wrapped this part of your site in it's own container, give it a width, and then `float` the image and the comment box.

```
	.container {
		width: 600px;
	}
	
	.cool-pic {
		float: left;
	}
	
	.comment-box {
		float: right;
	}

```
