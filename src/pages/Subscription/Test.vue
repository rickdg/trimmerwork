<template>
	<div class="sign-up">
		<TWHeadSmall></TWHeadSmall>
		<h3>Discover jobs first!</h3>
		<p>Here at TrimmerWork, we're committed to being the best cannabis job resource there can be! We'll never spam you, only help you find a great job.</p>
		<div id="mc_embed_signup">
			<form action="//trimmerwork.us16.list-manage.com/subscribe/post-json?u=c2998ebc9b1021aa3cbd8b458&amp;id=510ffda251&c=?" method="POST" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
				<div id="mc_embed_signup_scroll">
				<div
					class="form-group mc-field-group"
					:class="{'has-error': error}">
					<label class="control-label" for="mce-EMAIL">
						Email Address
					</label>
					<input
						id="mce-EMAIL"
						class="form-control required email"
						type="email"
						value=""
						name="EMAIL">
					<span class="help-block" v-show="error">{{ errorMessage }}</span>
				</div>
				<div id="mce-responses" class="clear">
					<div class="response" id="mce-error-response" style="display:none"></div>
					<div class="response" id="mce-success-response" style="display:none"></div>
				</div>
			    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_c2998ebc9b1021aa3cbd8b458_510ffda251" tabindex="-1" value=""></div>
			    <div class="clear">
			    	<input type="button" @click="emailSubmit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="sign-up__button">
			    	<h5 class="sign-up__success-message" v-if="isSubscribed">You've successfully been subscribed!</h5>
			    </div>
				</div>
			</form>
		</div>
	</div>
</template>

<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';}(jQuery));var $mcj = jQuery.noConflict(true);</script>

<script src="./Subscription.js"></script>

<style lang="scss">
	.sign-up {
		min-height: 475px;
		&__button {
			line-height: 1.4;
			color: #4fc08d;
			background-color: #fff;
	    border: 1px solid #4fc08d;
	    border-radius: 3px;
	    transition: 0.2s ease;
	    &:hover {
				background-color: #4fc08d;
				color: #fff;
	    }
		}
		&__success-message {
			margin: 0 10px;
			display: inline-block;
		}
	}
</style>