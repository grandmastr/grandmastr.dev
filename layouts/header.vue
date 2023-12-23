<script setup lang="ts">
import { SpeakerIcon, ThemeIcon } from '@/assets/svg'

const options: string[] = ['close', 'min', 'max']
</script>

<template>
  <header>
    <div class="options__container">
      <button
        v-for="option in options"
        :class="`option__button--${option}`"
        :key="option"
      />
    </div>
    <div class="controls__container">
      <button>
        <speaker-icon variant="killed" />
      </button>
      <button>
        <theme-icon mode="dark" />
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: #{$darkGrey};
  border: 1px solid #{$blackGrey};
  border-radius: 2rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    all: unset;
  }

  .options__container {
    background-color: #{$veryDarkBlue};
    padding: 0.5rem;
    border-radius: inherit;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    button[class*='option__button--'] {
      height: 0.6rem;
      width: 0.6rem;
      border-radius: 50%;
      border: 1px solid;
    }

    $options: (
      'close' $lightRed $darkRed,
      'min' $lightOrange $darkOrange,
      'max' $lightLime $darkLime
    );

    @each $option, $lightColor, $darkColor in $options {
      button[class='option__button--#{$option}'] {
        background-color: $lightColor;
        border-color: $darkColor;
      }
    }
  }

  .controls__container {
    display: flex;
    gap: 0.6rem;

    button {
      padding: 0.5rem;
      border-radius: 50%;
      background-color: #{$veryDarkBlue};
      display: flex;
      align-items: center;
      justify-content: center;
      height: 1.2rem;
      width: 1.2rem;
    }
  }
}
</style>
