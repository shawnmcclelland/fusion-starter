import { Builder } from "@builder.io/react";

Builder.register("editor.settings", {
  styleStrictMode: true,
  designTokens: {
    colors: [
      {
        name: "Color Action Complementary",
        value: "var(--color-action-complementary, #6B6C72)",
      },
      {
        name: "Color Action Complementary Active",
        value:
          "var(--color-action-complementary-active, rgba(107, 108, 114, 0.75))",
      },
      {
        name: "Color Action Complementary Border",
        value: "var(--color-action-complementary-border, #FFFFFF)",
      },
      {
        name: "Color Action Complementary Focus",
        value: "var(--color-action-complementary-focus, #6B6C72)",
      },
      {
        name: "Color Action Complementary Hover",
        value:
          "var(--color-action-complementary-hover, rgba(107, 108, 114, 0.85))",
      },
      {
        name: "Color Action Complementary Subtle",
        value:
          "var(--color-action-complementary-subtle, rgba(255, 255, 255, 0))",
      },
      {
        name: "Color Action Complementary Subtle Active",
        value:
          "var(--color-action-complementary-subtle-active, rgba(255, 255, 255, 0.2))",
      },
      {
        name: "Color Action Complementary Subtle Focus",
        value:
          "var(--color-action-complementary-subtle-focus, rgba(255, 255, 255, 0))",
      },
      {
        name: "Color Action Complementary Subtle Hover",
        value:
          "var(--color-action-complementary-subtle-hover, rgba(255, 255, 255, 0.1))",
      },
      {
        name: "Color Action Negative",
        value: "var(--color-action-negative, #D52B1E)",
      },
      {
        name: "Color Action Negative Active",
        value: "var(--color-action-negative-active, #B80000)",
      },
      {
        name: "Color Action Negative Focus",
        value: "var(--color-action-negative-focus, #D52B1E)",
      },
      {
        name: "Color Action Negative Hover",
        value: "var(--color-action-negative-hover, #C6160F)",
      },
      {
        name: "Color Action Negative Subtle",
        value: "var(--color-action-negative-subtle, rgba(213, 43, 30, 0))",
      },
      {
        name: "Color Action Negative Subtle Active",
        value:
          "var(--color-action-negative-subtle-active, rgba(213, 43, 30, 0.2))",
      },
      {
        name: "Color Action Negative Subtle Focus",
        value:
          "var(--color-action-negative-subtle-focus, rgba(213, 43, 30, 0))",
      },
      {
        name: "Color Action Negative Subtle Hover",
        value:
          "var(--color-action-negative-subtle-hover, rgba(213, 43, 30, 0.1))",
      },
      {
        name: "Color Action Passive",
        value: "var(--color-action-passive, #E3E5E8)",
      },
      {
        name: "Color Action Passive Active",
        value: "var(--color-action-passive-active, #BABEC5)",
      },
      {
        name: "Color Action Passive Border",
        value: "var(--color-action-passive-border, #6B6C72)",
      },
      {
        name: "Color Action Passive Focus",
        value: "var(--color-action-passive-focus, #E3E5E8)",
      },
      {
        name: "Color Action Passive Hover",
        value: "var(--color-action-passive-hover, #D4D7DC)",
      },
      {
        name: "Color Action Passive Subtle",
        value: "var(--color-action-passive-subtle, rgba(107, 108, 114, 0))",
      },
      {
        name: "Color Action Passive Subtle Active",
        value:
          "var(--color-action-passive-subtle-active, rgba(107, 108, 114, 0.2))",
      },
      {
        name: "Color Action Passive Subtle Focus",
        value:
          "var(--color-action-passive-subtle-focus, rgba(107, 108, 114, 0))",
      },
      {
        name: "Color Action Passive Subtle Hover",
        value:
          "var(--color-action-passive-subtle-hover, rgba(107, 108, 114, 0.1))",
      },
      {
        name: "Color Action Special Use",
        value: "var(--color-action-special-use, #0077C5)",
      },
      {
        name: "Color Action Special Use Active",
        value: "var(--color-action-special-use-active, #055393)",
      },
      {
        name: "Color Action Special Use Focus",
        value: "var(--color-action-special-use-focus, #0077C5)",
      },
      {
        name: "Color Action Special Use Hover",
        value: "var(--color-action-special-use-hover, #0066A9)",
      },
      {
        name: "Color Action Special Use Subtle",
        value: "var(--color-action-special-use-subtle, rgba(107, 108, 114, 0))",
      },
      {
        name: "Color Action Special Use Subtle Active",
        value:
          "var(--color-action-special-use-subtle-active, rgba(107, 108, 114, 0.2))",
      },
      {
        name: "Color Action Special Use Subtle Focus",
        value:
          "var(--color-action-special-use-subtle-focus, rgba(107, 108, 114, 0))",
      },
      {
        name: "Color Action Special Use Subtle Hover",
        value:
          "var(--color-action-special-use-subtle-hover, rgba(107, 108, 114, 0.1))",
      },
      {
        name: "Color Action Standard",
        value: "var(--color-action-standard, #00892E)",
      },
      {
        name: "Color Action Standard Active",
        value: "var(--color-action-standard-active, #005419)",
      },
      {
        name: "Color Action Standard Focus",
        value: "var(--color-action-standard-focus, #00892E)",
      },
      {
        name: "Color Action Standard Hover",
        value: "var(--color-action-standard-hover, #006C23)",
      },
      {
        name: "Color Action Standard Subtle",
        value: "var(--color-action-standard-subtle, rgba(107, 108, 114, 0))",
      },
      {
        name: "Color Action Standard Subtle Active",
        value:
          "var(--color-action-standard-subtle-active, rgba(107, 108, 114, 0.2))",
      },
      {
        name: "Color Action Standard Subtle Focus",
        value:
          "var(--color-action-standard-subtle-focus, rgba(107, 108, 114, 0))",
      },
      {
        name: "Color Action Standard Subtle Hover",
        value:
          "var(--color-action-standard-subtle-hover, rgba(107, 108, 114, 0.1))",
      },
      {
        name: "Color Code Attribute",
        value: "var(--color-code-attribute, #00892E)",
      },
      {
        name: "Color Code Boolean",
        value: "var(--color-code-boolean, #6100C2)",
      },
      {
        name: "Color Code Comment",
        value: "var(--color-code-comment, #6B6C72)",
      },
      {
        name: "Color Code Keyword",
        value: "var(--color-code-keyword, #D72792)",
      },
      {
        name: "Color Code Line Highlight",
        value: "var(--color-code-line-highlight, #F0F4F6)",
      },
      {
        name: "Color Code Line Number",
        value: "var(--color-code-line-number, #859299)",
      },
      {
        name: "Color Code Number",
        value: "var(--color-code-number, #C84F00)",
      },
      {
        name: "Color Code Operator",
        value: "var(--color-code-operator, #859299)",
      },
      {
        name: "Color Code Qualifier",
        value: "var(--color-code-qualifier, #3BD85E)",
      },
      {
        name: "Color Code String",
        value: "var(--color-code-string, #00828D)",
      },
      {
        name: "Color Code Text",
        value: "var(--color-code-text, #21262A)",
      },
      {
        name: "Color Code Type",
        value: "var(--color-code-type, #FCA354)",
      },
      {
        name: "Color Code Variable 1",
        value: "var(--color-code-variable-1, #21262A)",
      },
      {
        name: "Color Code Variable 2",
        value: "var(--color-code-variable-2, #21262A)",
      },
      {
        name: "Color Code Variable 3",
        value: "var(--color-code-variable-3, #FCA354)",
      },
      {
        name: "Color Container Background Accent",
        value: "var(--color-container-background-accent, #EAF2F8)",
      },
      {
        name: "Color Container Background Accent Active",
        value:
          "var(--color-container-background-accent-active, rgba(212, 215, 220, 0.2))",
      },
      {
        name: "Color Container Background Accent Focus",
        value:
          "var(--color-container-background-accent-focus, rgba(212, 215, 220, 0.1))",
      },
      {
        name: "Color Container Background Accent Hover",
        value:
          "var(--color-container-background-accent-hover, rgba(212, 215, 220, 0.1))",
      },
      {
        name: "Color Container Background Accent Selected",
        value:
          "var(--color-container-background-accent-selected, rgba(212, 215, 220, 0.2))",
      },
      {
        name: "Color Container Background Attention",
        value: "var(--color-container-background-attention, #FFEAC7)",
      },
      {
        name: "Color Container Background Beta",
        value: "var(--color-container-background-beta, #E1F9FF)",
      },
      {
        name: "Color Container Background Complementary",
        value: "var(--color-container-background-complementary, #393A3D)",
      },
      {
        name: "Color Container Background Info",
        value: "var(--color-container-background-info, #E0EDFF)",
      },
      {
        name: "Color Container Background Inverse",
        value: "var(--color-container-background-inverse, #393A3D)",
      },
      {
        name: "Color Container Background Negative",
        value: "var(--color-container-background-negative, #FFD4D8)",
      },
      {
        name: "Color Container Background Neutral",
        value: "var(--color-container-background-neutral, #E2E9ED)",
      },
      {
        name: "Color Container Background New",
        value: "var(--color-container-background-new, #FFE6F4)",
      },
      {
        name: "Color Container Background Positive",
        value: "var(--color-container-background-positive, #D8FFDB)",
      },
      {
        name: "Color Container Background Primary",
        value: "var(--color-container-background-primary, #FFFFFF)",
      },
      {
        name: "Color Container Background Quaternary",
        value: "var(--color-container-background-quaternary, #D4D7DC)",
      },
      {
        name: "Color Container Background Secondary",
        value: "var(--color-container-background-secondary, #ECEEF1)",
      },
      {
        name: "Color Container Background Special Use 1",
        value: "var(--color-container-background-special-use-1, #7CBCFF)",
      },
      {
        name: "Color Container Background Special Use 2",
        value: "var(--color-container-background-special-use-2, #00D5B0)",
      },
      {
        name: "Color Container Background Special Use 3",
        value: "var(--color-container-background-special-use-3, #FF808C)",
      },
      {
        name: "Color Container Background Special Use 4",
        value: "var(--color-container-background-special-use-4, #D5DEE3)",
      },
      {
        name: "Color Container Background Tertiary",
        value: "var(--color-container-background-tertiary, #E3E5E8)",
      },
      {
        name: "Color Container Border Accent",
        value: "var(--color-container-border-accent, #108000)",
      },
      {
        name: "Color Container Border Attention",
        value: "var(--color-container-border-attention, #FF8000)",
      },
      {
        name: "Color Container Border Complementary",
        value: "var(--color-container-border-complementary, #8D9096)",
      },
      {
        name: "Color Container Border Info",
        value: "var(--color-container-border-info, #0097E6)",
      },
      {
        name: "Color Container Border Negative",
        value: "var(--color-container-border-negative, #E43834)",
      },
      {
        name: "Color Container Border Positive",
        value: "var(--color-container-border-positive, #53B700)",
      },
      {
        name: "Color Container Border Primary",
        value: "var(--color-container-border-primary, #8D9096)",
      },
      {
        name: "Color Container Border Secondary",
        value: "var(--color-container-border-secondary, #BABEC5)",
      },
      {
        name: "Color Container Border Tertiary",
        value: "var(--color-container-border-tertiary, #D4D7DC)",
      },
      {
        name: "Color Container Overlay",
        value: "var(--color-container-overlay, rgba(255, 255, 255, 0.5))",
      },
      {
        name: "Color Data Attention",
        value: "var(--color-data-attention, #FF8000)",
      },
      {
        name: "Color Data Attention 100",
        value: "var(--color-data-attention-100, #FF9331)",
      },
      {
        name: "Color Data Attention 200",
        value: "var(--color-data-attention-200, #FF8000)",
      },
      {
        name: "Color Data Attention 300",
        value: "var(--color-data-attention-300, #FF6A00)",
      },
      {
        name: "Color Data Attention 400",
        value: "var(--color-data-attention-400, #F95700)",
      },
      {
        name: "Color Data Category 1",
        value: "var(--color-data-category-1, #0077C5)",
      },
      {
        name: "Color Data Category 1 Background",
        value: "var(--color-data-category-1-background, #7CBCFF)",
      },
      {
        name: "Color Data Category 2",
        value: "var(--color-data-category-2, #00A6A4)",
      },
      {
        name: "Color Data Category 2 Background",
        value: "var(--color-data-category-2-background, #38E8F6)",
      },
      {
        name: "Color Data Category 3",
        value: "var(--color-data-category-3, #4E2B8F)",
      },
      {
        name: "Color Data Category 3 Background",
        value: "var(--color-data-category-3-background, #C0ABFF)",
      },
      {
        name: "Color Data Category 4",
        value: "var(--color-data-category-4, #F95700)",
      },
      {
        name: "Color Data Category 4 Background",
        value: "var(--color-data-category-4-background, #FCA354)",
      },
      {
        name: "Color Data Category 5",
        value: "var(--color-data-category-5, #B80000)",
      },
      {
        name: "Color Data Category 5 Background",
        value: "var(--color-data-category-5-background, #FF9BA4)",
      },
      {
        name: "Color Data Category 6",
        value: "var(--color-data-category-6, #C9007A)",
      },
      {
        name: "Color Data Category 6 Background",
        value: "var(--color-data-category-6-background, #FF95D3)",
      },
      {
        name: "Color Data Category 7",
        value: "var(--color-data-category-7, #7A3DD8)",
      },
      {
        name: "Color Data Category 7 Background",
        value: "var(--color-data-category-7-background, #D0C2FF)",
      },
      {
        name: "Color Data Category 8",
        value: "var(--color-data-category-8, #2CA01C)",
      },
      {
        name: "Color Data Category 8 Background",
        value: "var(--color-data-category-8-background, #5BEF76)",
      },
      {
        name: "Color Data Category 9",
        value: "var(--color-data-category-9, #21ABF6)",
      },
      {
        name: "Color Data Category 9 Background",
        value: "var(--color-data-category-9-background, #A0CFFF)",
      },
      {
        name: "Color Data Category 10",
        value: "var(--color-data-category-10, #FFAD00)",
      },
      {
        name: "Color Data Category 10 Background",
        value: "var(--color-data-category-10-background, #F9C741)",
      },
      {
        name: "Color Data Negative",
        value: "var(--color-data-negative, #D52B1E)",
      },
      {
        name: "Color Data Negative 100",
        value: "var(--color-data-negative-100, #F25A52)",
      },
      {
        name: "Color Data Negative 200",
        value: "var(--color-data-negative-200, #E43834)",
      },
      {
        name: "Color Data Negative 300",
        value: "var(--color-data-negative-300, #D52B1E)",
      },
      {
        name: "Color Data Negative 400",
        value: "var(--color-data-negative-400, #B80000)",
      },
      {
        name: "Color Data Neutral",
        value: "var(--color-data-neutral, rgba(212, 215, 220, 0.5))",
      },
      {
        name: "Color Data Neutral 100",
        value: "var(--color-data-neutral-100, #BABEC5)",
      },
      {
        name: "Color Data Neutral 200",
        value: "var(--color-data-neutral-200, #8D9096)",
      },
      {
        name: "Color Data Neutral 300",
        value: "var(--color-data-neutral-300, #6B6C72)",
      },
      {
        name: "Color Data Neutral 400",
        value: "var(--color-data-neutral-400, #393A3D)",
      },
      {
        name: "Color Data Positive",
        value: "var(--color-data-positive, #108000)",
      },
      {
        name: "Color Data Positive 100",
        value: "var(--color-data-positive-100, #7FD000)",
      },
      {
        name: "Color Data Positive 200",
        value: "var(--color-data-positive-200, #53B700)",
      },
      {
        name: "Color Data Positive 300",
        value: "var(--color-data-positive-300, #2CA01C)",
      },
      {
        name: "Color Data Positive 400",
        value: "var(--color-data-positive-400, #108000)",
      },
      {
        name: "Color Data Primary",
        value: "var(--color-data-primary, #53B700)",
      },
      {
        name: "Color Data Primary 100",
        value: "var(--color-data-primary-100, #7FD000)",
      },
      {
        name: "Color Data Primary 200",
        value: "var(--color-data-primary-200, #53B700)",
      },
      {
        name: "Color Data Primary 300",
        value: "var(--color-data-primary-300, #2CA01C)",
      },
      {
        name: "Color Data Primary 400",
        value: "var(--color-data-primary-400, #108000)",
      },
      {
        name: "Color Data Secondary",
        value: "var(--color-data-secondary, #00A6A4)",
      },
      {
        name: "Color Data Secondary 100",
        value: "var(--color-data-secondary-100, #00D7D7)",
      },
      {
        name: "Color Data Secondary 200",
        value: "var(--color-data-secondary-200, #00C1BF)",
      },
      {
        name: "Color Data Secondary 300",
        value: "var(--color-data-secondary-300, #00A6A4)",
      },
      {
        name: "Color Data Secondary 400",
        value: "var(--color-data-secondary-400, #008481)",
      },
      {
        name: "Color Data Tertiary",
        value: "var(--color-data-tertiary, #7A3DD8)",
      },
      {
        name: "Color Data Tertiary 100",
        value: "var(--color-data-tertiary-100, #9457FA)",
      },
      {
        name: "Color Data Tertiary 200",
        value: "var(--color-data-tertiary-200, #7A3DD8)",
      },
      {
        name: "Color Data Tertiary 300",
        value: "var(--color-data-tertiary-300, #6436AF)",
      },
      {
        name: "Color Data Tertiary 400",
        value: "var(--color-data-tertiary-400, #4E2B8F)",
      },
      {
        name: "Color Divider Inverse",
        value: "var(--color-divider-inverse, #FFFFFF)",
      },
      {
        name: "Color Divider Primary",
        value: "var(--color-divider-primary, #8D9096)",
      },
      {
        name: "Color Divider Secondary",
        value: "var(--color-divider-secondary, #BABEC5)",
      },
      {
        name: "Color Divider Tertiary",
        value: "var(--color-divider-tertiary, #D4D7DC)",
      },
      {
        name: "Color Focus Indicator",
        value: "var(--color-focus-indicator, #0077C5)",
      },
      {
        name: "Color Icon Accent",
        value: "var(--color-icon-accent, #0077C5)",
      },
      {
        name: "Color Icon Complementary",
        value: "var(--color-icon-complementary, #FFFFFF)",
      },
      {
        name: "Color Icon Disabled",
        value: "var(--color-icon-disabled, #8D9096)",
      },
      {
        name: "Color Icon Inverse",
        value: "var(--color-icon-inverse, #FFFFFF)",
      },
      {
        name: "Color Icon Primary",
        value: "var(--color-icon-primary, #393A3D)",
      },
      {
        name: "Color Icon Secondary",
        value: "var(--color-icon-secondary, #6B6C72)",
      },
      {
        name: "Color Input Background Disabled",
        value: "var(--color-input-background-disabled, #FFFFFF)",
      },
      {
        name: "Color Input Background Error",
        value: "var(--color-input-background-error, rgba(213, 43, 30, 0.1))",
      },
      {
        name: "Color Input Background Error Focus",
        value:
          "var(--color-input-background-error-focus, rgba(213, 43, 30, 0.07))",
      },
      {
        name: "Color Input Background Primary",
        value: "var(--color-input-background-primary, #FFFFFF)",
      },
      {
        name: "Color Input Background Primary Active",
        value: "var(--color-input-background-primary-active, #FFFFFF)",
      },
      {
        name: "Color Input Background Primary Focus",
        value: "var(--color-input-background-primary-focus, #FFFFFF)",
      },
      {
        name: "Color Input Background Primary Hover",
        value: "var(--color-input-background-primary-hover, #FFFFFF)",
      },
      {
        name: "Color Input Background Primary Selected",
        value: "var(--color-input-background-primary-selected, #2CA01C)",
      },
      {
        name: "Color Input Background Readonly",
        value: "var(--color-input-background-readonly, #F4F5F8)",
      },
      {
        name: "Color Input Background Secondary",
        value: "var(--color-input-background-secondary, #BABEC5)",
      },
      {
        name: "Color Input Background Secondary Active",
        value: "var(--color-input-background-secondary-active, #BABEC5)",
      },
      {
        name: "Color Input Background Secondary Focus",
        value: "var(--color-input-background-secondary-focus, #BABEC5)",
      },
      {
        name: "Color Input Background Secondary Hover",
        value: "var(--color-input-background-secondary-hover, #BABEC5)",
      },
      {
        name: "Color Input Background Tertiary",
        value: "var(--color-input-background-tertiary, #ECEEF1)",
      },
      {
        name: "Color Input Background Tertiary Active",
        value: "var(--color-input-background-tertiary-active, #ECEEF1)",
      },
      {
        name: "Color Input Background Tertiary Focus",
        value: "var(--color-input-background-tertiary-focus, #ECEEF1)",
      },
      {
        name: "Color Input Background Tertiary Hover",
        value: "var(--color-input-background-tertiary-hover, #ECEEF1)",
      },
      {
        name: "Color Input Background Warning",
        value: "var(--color-input-background-warning, rgba(255, 187, 0, 0.25))",
      },
      {
        name: "Color Input Background Warning Focus",
        value:
          "var(--color-input-background-warning-focus, rgba(255, 187, 0, 0.07))",
      },
      {
        name: "Color Input Border Disabled",
        value: "var(--color-input-border-disabled, rgba(141, 144, 150, 0.5))",
      },
      {
        name: "Color Input Border Error",
        value: "var(--color-input-border-error, #D52B1E)",
      },
      {
        name: "Color Input Border Primary",
        value: "var(--color-input-border-primary, #8D9096)",
      },
      {
        name: "Color Input Border Primary Active",
        value: "var(--color-input-border-primary-active, #2CA01C)",
      },
      {
        name: "Color Input Border Primary Focus",
        value: "var(--color-input-border-primary-focus, #2CA01C)",
      },
      {
        name: "Color Input Border Primary Hover",
        value: "var(--color-input-border-primary-hover, #2CA01C)",
      },
      {
        name: "Color Input Border Primary Selected",
        value: "var(--color-input-border-primary-selected, #2CA01C)",
      },
      {
        name: "Color Input Border Readonly",
        value: "var(--color-input-border-readonly, #BABEC5)",
      },
      {
        name: "Color Input Border Secondary",
        value: "var(--color-input-border-secondary, #8D9096)",
      },
      {
        name: "Color Input Border Secondary Active",
        value: "var(--color-input-border-secondary-active, #2CA01C)",
      },
      {
        name: "Color Input Border Secondary Focus",
        value: "var(--color-input-border-secondary-focus, #2CA01C)",
      },
      {
        name: "Color Input Border Secondary Hover",
        value: "var(--color-input-border-secondary-hover, #2CA01C)",
      },
      {
        name: "Color Input Border Tertiary",
        value: "var(--color-input-border-tertiary, #8D9096)",
      },
      {
        name: "Color Input Border Tertiary Active",
        value: "var(--color-input-border-tertiary-active, #2CA01C)",
      },
      {
        name: "Color Input Border Tertiary Focus",
        value: "var(--color-input-border-tertiary-focus, #2CA01C)",
      },
      {
        name: "Color Input Border Tertiary Hover",
        value: "var(--color-input-border-tertiary-hover, #2CA01C)",
      },
      {
        name: "Color Input Border Warning",
        value: "var(--color-input-border-warning, #FF6A00)",
      },
      {
        name: "Color Input Label",
        value: "var(--color-input-label, #6B6C72)",
      },
      {
        name: "Color Input Placeholder",
        value: "var(--color-input-placeholder, #6B6C72)",
      },
      {
        name: "Color Input Placeholder Disabled",
        value: "var(--color-input-placeholder-disabled, #BABEC5)",
      },
      {
        name: "Color Link Background",
        value: "var(--color-link-background, #EBF9FF)",
      },
      {
        name: "Color Link Background Visited",
        value: "var(--color-link-background-visited, rgba(168, 152, 255, 0.1))",
      },
      {
        name: "Color Link Text",
        value: "var(--color-link-text, #0365AC)",
      },
      {
        name: "Color Link Text Active",
        value: "var(--color-link-text-active, #055393)",
      },
      {
        name: "Color Link Text Complementary",
        value: "var(--color-link-text-complementary, #34BFFF)",
      },
      {
        name: "Color Link Text Complementary Visited",
        value: "var(--color-link-text-complementary-visited, #A898FF)",
      },
      {
        name: "Color Link Text Focus",
        value: "var(--color-link-text-focus, #0365AC)",
      },
      {
        name: "Color Link Text Hover",
        value: "var(--color-link-text-hover, #055393)",
      },
      {
        name: "Color Link Text Visited",
        value: "var(--color-link-text-visited, #7A3DD8)",
      },
      {
        name: "Color Message Background Received",
        value: "var(--color-message-background-received, #E3E5E8)",
      },
      {
        name: "Color Message Background Sent",
        value: "var(--color-message-background-sent, #2CA01C)",
      },
      {
        name: "Color Message Text Received",
        value: "var(--color-message-text-received, #393A3D)",
      },
      {
        name: "Color Message Text Sent",
        value: "var(--color-message-text-sent, #FFFFFF)",
      },
      {
        name: "Color Overlay",
        value: "var(--color-overlay, rgba(0, 0, 0, 0.4))",
      },
      {
        name: "Color Page Background Accent",
        value: "var(--color-page-background-accent, #ECEEF1)",
      },
      {
        name: "Color Page Background Primary",
        value: "var(--color-page-background-primary, #FFFFFF)",
      },
      {
        name: "Color Page Background Secondary",
        value: "var(--color-page-background-secondary, #ECEEF1)",
      },
      {
        name: "Color Page Background Tertiary",
        value: "var(--color-page-background-tertiary, #ECEEF1)",
      },
      {
        name: "Color Progress Indicator",
        value: "var(--color-progress-indicator, #2CA01C)",
      },
      {
        name: "Color Selection Indicator",
        value: "var(--color-selection-indicator, #2CA01C)",
      },
      {
        name: "Color Shadow",
        value: "var(--color-shadow, rgba(0, 0, 0, 0.2))",
      },
      {
        name: "Color Text Accent",
        value: "var(--color-text-accent, #FFFFFF)",
      },
      {
        name: "Color Text Complementary",
        value: "var(--color-text-complementary, #FFFFFF)",
      },
      {
        name: "Color Text Disabled",
        value: "var(--color-text-disabled, #8D9096)",
      },
      {
        name: "Color Text Highlight",
        value: "var(--color-text-highlight, #A0CFFF)",
      },
      {
        name: "Color Text Inverse",
        value: "var(--color-text-inverse, #FFFFFF)",
      },
      {
        name: "Color Text Primary",
        value: "var(--color-text-primary, #393A3D)",
      },
      {
        name: "Color Text Quaternary",
        value: "var(--color-text-quaternary, #6B6C72)",
      },
      {
        name: "Color Text Secondary",
        value: "var(--color-text-secondary, #6B6C72)",
      },
      {
        name: "Color Text Tertiary",
        value: "var(--color-text-tertiary, #6B6C72)",
      },
      {
        name: "Color Track Primary",
        value: "var(--color-track-primary, #8D9096)",
      },
      {
        name: "Color Track Secondary",
        value: "var(--color-track-secondary, #D4D7DC)",
      },
      {
        name: "Color Ui Attention",
        value: "var(--color-ui-attention, #FF6A00)",
      },
      {
        name: "Color Ui Attention Active",
        value: "var(--color-ui-attention-active, #F95700)",
      },
      {
        name: "Color Ui Attention Hover",
        value: "var(--color-ui-attention-hover, #FC6000)",
      },
      {
        name: "Color Ui Beta",
        value: "var(--color-ui-beta, #008481)",
      },
      {
        name: "Color Ui Completed",
        value: "var(--color-ui-completed, #2CA01C)",
      },
      {
        name: "Color Ui Discover",
        value: "var(--color-ui-discover, #0097E6)",
      },
      {
        name: "Color Ui Info",
        value: "var(--color-ui-info, #0077C5)",
      },
      {
        name: "Color Ui Negative",
        value: "var(--color-ui-negative, #D52B1E)",
      },
      {
        name: "Color Ui Negative Active",
        value: "var(--color-ui-negative-active, #B80000)",
      },
      {
        name: "Color Ui Negative Hover",
        value: "var(--color-ui-negative-hover, #C6160F)",
      },
      {
        name: "Color Ui Neutral",
        value: "var(--color-ui-neutral, #6B6C72)",
      },
      {
        name: "Color Ui Neutral Active",
        value: "var(--color-ui-neutral-active, #393A3D)",
      },
      {
        name: "Color Ui Neutral Focus",
        value: "var(--color-ui-neutral-focus, #6B6C72)",
      },
      {
        name: "Color Ui Neutral Hover",
        value: "var(--color-ui-neutral-hover, #525357)",
      },
      {
        name: "Color Ui Neutral Selected",
        value: "var(--color-ui-neutral-selected, #393A3D)",
      },
      {
        name: "Color Ui New",
        value: "var(--color-ui-new, #C9007A)",
      },
      {
        name: "Color Ui Positive",
        value: "var(--color-ui-positive, #108000)",
      },
      {
        name: "Color Ui Primary",
        value: "var(--color-ui-primary, #2CA01C)",
      },
      {
        name: "Color Ui Primary Active",
        value: "var(--color-ui-primary-active, #108000)",
      },
      {
        name: "Color Ui Primary Focus",
        value: "var(--color-ui-primary-focus, #2CA01C)",
      },
      {
        name: "Color Ui Primary Hover",
        value: "var(--color-ui-primary-hover, #258F1D)",
      },
      {
        name: "Color Ui Secondary",
        value: "var(--color-ui-secondary, #2CA01C)",
      },
      {
        name: "Color Ui Secondary Active",
        value: "var(--color-ui-secondary-active, #108000)",
      },
      {
        name: "Color Ui Secondary Focus",
        value: "var(--color-ui-secondary-focus, #2CA01C)",
      },
      {
        name: "Color Ui Secondary Hover",
        value: "var(--color-ui-secondary-hover, #258F1D)",
      },
      {
        name: "Color Ui Tertiary",
        value: "var(--color-ui-tertiary, #393A3D)",
      },
      {
        name: "Color Ui Tertiary Active",
        value: "var(--color-ui-tertiary-active, #000000)",
      },
      {
        name: "Color Ui Tertiary Focus",
        value: "var(--color-ui-tertiary-focus, #393A3D)",
      },
      {
        name: "Color Ui Tertiary Hover",
        value: "var(--color-ui-tertiary-hover, #2B2B2E)",
      },
      {
        name: "Color Action Complementary",
        value: "var(--color-action-complementary, #6B6C72)",
      },
      {
        name: "Color Action Complementary Active",
        value:
          "var(--color-action-complementary-active, rgba(107, 108, 114, 0.75))",
      },
      {
        name: "Color Action Complementary Border",
        value: "var(--color-action-complementary-border, #FFFFFF)",
      },
      {
        name: "Color Action Complementary Focus",
        value: "var(--color-action-complementary-focus, #6B6C72)",
      },
      {
        name: "Color Action Complementary Hover",
        value:
          "var(--color-action-complementary-hover, rgba(107, 108, 114, 0.85))",
      },
      {
        name: "Color Action Complementary Subtle",
        value:
          "var(--color-action-complementary-subtle, rgba(255, 255, 255, 0))",
      },
      {
        name: "Color Action Complementary Subtle Active",
        value:
          "var(--color-action-complementary-subtle-active, rgba(255, 255, 255, 0.2))",
      },
      {
        name: "Color Action Complementary Subtle Focus",
        value:
          "var(--color-action-complementary-subtle-focus, rgba(255, 255, 255, 0))",
      },
      {
        name: "Color Action Complementary Subtle Hover",
        value:
          "var(--color-action-complementary-subtle-hover, rgba(255, 255, 255, 0.1))",
      },
      {
        name: "Color Action Negative",
        value: "var(--color-action-negative, #FF8979)",
      },
      {
        name: "Color Action Negative Active",
        value: "var(--color-action-negative-active, #FFACA1)",
      },
      {
        name: "Color Action Negative Focus",
        value: "var(--color-action-negative-focus, #FF8979)",
      },
      {
        name: "Color Action Negative Hover",
        value: "var(--color-action-negative-hover, #FFA194)",
      },
      {
        name: "Color Action Negative Subtle",
        value: "var(--color-action-negative-subtle, rgba(228, 56, 52, 0))",
      },
      {
        name: "Color Action Negative Subtle Active",
        value:
          "var(--color-action-negative-subtle-active, rgba(228, 56, 52, 0.2))",
      },
      {
        name: "Color Action Negative Subtle Focus",
        value:
          "var(--color-action-negative-subtle-focus, rgba(228, 56, 52, 0))",
      },
      {
        name: "Color Action Negative Subtle Hover",
        value:
          "var(--color-action-negative-subtle-hover, rgba(228, 56, 52, 0.1))",
      },
      {
        name: "Color Action Passive",
        value: "var(--color-action-passive, #6B6C72)",
      },
      {
        name: "Color Action Passive Active",
        value: "var(--color-action-passive-active, rgba(107, 108, 114, 0.75))",
      },
      {
        name: "Color Action Passive Border",
        value: "var(--color-action-passive-border, #FFFFFF)",
      },
      {
        name: "Color Action Passive Focus",
        value: "var(--color-action-passive-focus, #6B6C72)",
      },
      {
        name: "Color Action Passive Hover",
        value: "var(--color-action-passive-hover, rgba(107, 108, 114, 0.85))",
      },
      {
        name: "Color Action Passive Subtle",
        value: "var(--color-action-passive-subtle, rgba(255, 255, 255, 0))",
      },
      {
        name: "Color Action Passive Subtle Active",
        value:
          "var(--color-action-passive-subtle-active, rgba(255, 255, 255, 0.2))",
      },
      {
        name: "Color Action Passive Subtle Focus",
        value:
          "var(--color-action-passive-subtle-focus, rgba(255, 255, 255, 0))",
      },
      {
        name: "Color Action Passive Subtle Hover",
        value:
          "var(--color-action-passive-subtle-hover, rgba(255, 255, 255, 0.1))",
      },
      {
        name: "Color Action Special Use",
        value: "var(--color-action-special-use, #34BFFF)",
      },
      {
        name: "Color Action Special Use Active",
        value: "var(--color-action-special-use-active, #71D2FF)",
      },
      {
        name: "Color Action Special Use Focus",
        value: "var(--color-action-special-use-focus, #34BFFF)",
      },
      {
        name: "Color Action Special Use Hover",
        value: "var(--color-action-special-use-hover, #5DCCFF)",
      },
      {
        name: "Color Action Special Use Subtle",
        value: "var(--color-action-special-use-subtle, rgba(255, 172, 97, 0))",
      },
      {
        name: "Color Action Special Use Subtle Active",
        value:
          "var(--color-action-special-use-subtle-active, rgba(5, 83, 147, 0.2))",
      },
      {
        name: "Color Action Special Use Subtle Focus",
        value:
          "var(--color-action-special-use-subtle-focus, rgba(255, 172, 97, 0))",
      },
      {
        name: "Color Action Special Use Subtle Hover",
        value:
          "var(--color-action-special-use-subtle-hover, rgba(5, 83, 147, 0.1))",
      },
      {
        name: "Color Action Standard",
        value: "var(--color-action-standard, #3BD85E)",
      },
      {
        name: "Color Action Standard Active",
        value: "var(--color-action-standard-active, #7FFA94)",
      },
      {
        name: "Color Action Standard Focus",
        value: "var(--color-action-standard-focus, #3BD85E)",
      },
      {
        name: "Color Action Standard Hover",
        value: "var(--color-action-standard-hover, #5BEF76)",
      },
      {
        name: "Color Action Standard Subtle",
        value: "var(--color-action-standard-subtle, rgba(186, 190, 197, 0))",
      },
      {
        name: "Color Action Standard Subtle Active",
        value:
          "var(--color-action-standard-subtle-active, rgba(186, 190, 197, 0.2))",
      },
      {
        name: "Color Action Standard Subtle Focus",
        value:
          "var(--color-action-standard-subtle-focus, rgba(186, 190, 197, 0))",
      },
      {
        name: "Color Action Standard Subtle Hover",
        value:
          "var(--color-action-standard-subtle-hover, rgba(186, 190, 197, 0.1))",
      },
      {
        name: "Color Code Attribute",
        value: "var(--color-code-attribute, #3BD85E)",
      },
      {
        name: "Color Code Boolean",
        value: "var(--color-code-boolean, #C0ABFF)",
      },
      {
        name: "Color Code Comment",
        value: "var(--color-code-comment, #BABEC5)",
      },
      {
        name: "Color Code Keyword",
        value: "var(--color-code-keyword, #FF95D3)",
      },
      {
        name: "Color Code Line Highlight",
        value: "var(--color-code-line-highlight, #3C4348)",
      },
      {
        name: "Color Code Line Number",
        value: "var(--color-code-line-number, #859299)",
      },
      {
        name: "Color Code Number",
        value: "var(--color-code-number, #FCA354)",
      },
      {
        name: "Color Code Operator",
        value: "var(--color-code-operator, #859299)",
      },
      {
        name: "Color Code Qualifier",
        value: "var(--color-code-qualifier, #3BD85E)",
      },
      {
        name: "Color Code String",
        value: "var(--color-code-string, #38E8F6)",
      },
      {
        name: "Color Code Text",
        value: "var(--color-code-text, #E2E9ED)",
      },
      {
        name: "Color Code Type",
        value: "var(--color-code-type, #E56C1D)",
      },
      {
        name: "Color Code Variable 1",
        value: "var(--color-code-variable-1, #E2E9ED)",
      },
      {
        name: "Color Code Variable 2",
        value: "var(--color-code-variable-2, #E2E9ED)",
      },
      {
        name: "Color Code Variable 3",
        value: "var(--color-code-variable-3, #E56C1D)",
      },
      {
        name: "Color Container Background Accent",
        value: "var(--color-container-background-accent, #1F4768)",
      },
      {
        name: "Color Container Background Accent Active",
        value:
          "var(--color-container-background-accent-active, rgba(141, 144, 150, 0.2))",
      },
      {
        name: "Color Container Background Accent Focus",
        value:
          "var(--color-container-background-accent-focus, rgba(141, 144, 150, 0.1))",
      },
      {
        name: "Color Container Background Accent Hover",
        value:
          "var(--color-container-background-accent-hover, rgba(141, 144, 150, 0.1))",
      },
      {
        name: "Color Container Background Accent Selected",
        value:
          "var(--color-container-background-accent-selected, rgba(141, 144, 150, 0.2))",
      },
      {
        name: "Color Container Background Attention",
        value: "var(--color-container-background-attention, #523120)",
      },
      {
        name: "Color Container Background Beta",
        value: "var(--color-container-background-beta, #203A3A)",
      },
      {
        name: "Color Container Background Complementary",
        value: "var(--color-container-background-complementary, #393A3D)",
      },
      {
        name: "Color Container Background Info",
        value: "var(--color-container-background-info, #21313D)",
      },
      {
        name: "Color Container Background Inverse",
        value: "var(--color-container-background-inverse, #ECEEF1)",
      },
      {
        name: "Color Container Background Negative",
        value: "var(--color-container-background-negative, #531C1C)",
      },
      {
        name: "Color Container Background Neutral",
        value: "var(--color-container-background-neutral, #2D2D2E)",
      },
      {
        name: "Color Container Background New",
        value: "var(--color-container-background-new, #3F2033)",
      },
      {
        name: "Color Container Background Positive",
        value: "var(--color-container-background-positive, #233A20)",
      },
      {
        name: "Color Container Background Primary",
        value: "var(--color-container-background-primary, #393A3D)",
      },
      {
        name: "Color Container Background Quaternary",
        value:
          "var(--color-container-background-quaternary, rgba(107, 108, 114, 0.5))",
      },
      {
        name: "Color Container Background Secondary",
        value:
          "var(--color-container-background-secondary, rgba(57, 58, 61, 0.5))",
      },
      {
        name: "Color Container Background Special Use 1",
        value: "var(--color-container-background-special-use-1, #205EA3)",
      },
      {
        name: "Color Container Background Special Use 2",
        value: "var(--color-container-background-special-use-2, #006A56)",
      },
      {
        name: "Color Container Background Special Use 3",
        value: "var(--color-container-background-special-use-3, #B61A37)",
      },
      {
        name: "Color Container Background Special Use 4",
        value: "var(--color-container-background-special-use-4, #5D686F)",
      },
      {
        name: "Color Container Background Tertiary",
        value: "var(--color-container-background-tertiary, #393A3D)",
      },
      {
        name: "Color Container Border Accent",
        value: "var(--color-container-border-accent, #87CD4C)",
      },
      {
        name: "Color Container Border Attention",
        value: "var(--color-container-border-attention, #FF8000)",
      },
      {
        name: "Color Container Border Complementary",
        value: "var(--color-container-border-complementary, #8D9096)",
      },
      {
        name: "Color Container Border Info",
        value: "var(--color-container-border-info, #0097E6)",
      },
      {
        name: "Color Container Border Negative",
        value: "var(--color-container-border-negative, #E43834)",
      },
      {
        name: "Color Container Border Positive",
        value: "var(--color-container-border-positive, #53B700)",
      },
      {
        name: "Color Container Border Primary",
        value: "var(--color-container-border-primary, #D4D7DC)",
      },
      {
        name: "Color Container Border Secondary",
        value: "var(--color-container-border-secondary, #8D9096)",
      },
      {
        name: "Color Container Border Tertiary",
        value: "var(--color-container-border-tertiary, #6B6C72)",
      },
      {
        name: "Color Container Overlay",
        value: "var(--color-container-overlay, rgba(40, 40, 40, 0.5))",
      },
      {
        name: "Color Data Attention",
        value: "var(--color-data-attention, #FF8000)",
      },
      {
        name: "Color Data Attention 100",
        value: "var(--color-data-attention-100, #FF6A00)",
      },
      {
        name: "Color Data Attention 200",
        value: "var(--color-data-attention-200, #FF8000)",
      },
      {
        name: "Color Data Attention 300",
        value: "var(--color-data-attention-300, #FF9331)",
      },
      {
        name: "Color Data Attention 400",
        value: "var(--color-data-attention-400, #FFAC61)",
      },
      {
        name: "Color Data Category 1",
        value: "var(--color-data-category-1, #34BFFF)",
      },
      {
        name: "Color Data Category 1 Background",
        value: "var(--color-data-category-1-background, #385564)",
      },
      {
        name: "Color Data Category 2",
        value: "var(--color-data-category-2, #008481)",
      },
      {
        name: "Color Data Category 2 Background",
        value: "var(--color-data-category-2-background, #2E494B)",
      },
      {
        name: "Color Data Category 3",
        value: "var(--color-data-category-3, #9457FA)",
      },
      {
        name: "Color Data Category 3 Background",
        value: "var(--color-data-category-3-background, #4B4063)",
      },
      {
        name: "Color Data Category 4",
        value: "var(--color-data-category-4, #FF9331)",
      },
      {
        name: "Color Data Category 4 Background",
        value: "var(--color-data-category-4-background, #614C3B)",
      },
      {
        name: "Color Data Category 5",
        value: "var(--color-data-category-5, #F25A52)",
      },
      {
        name: "Color Data Category 5 Background",
        value: "var(--color-data-category-5-background, #5E4041)",
      },
      {
        name: "Color Data Category 6",
        value: "var(--color-data-category-6, #FFEE00)",
      },
      {
        name: "Color Data Category 6 Background",
        value: "var(--color-data-category-6-background, #615E31)",
      },
      {
        name: "Color Data Category 7",
        value: "var(--color-data-category-7, #E31C9E)",
      },
      {
        name: "Color Data Category 7 Background",
        value: "var(--color-data-category-7-background, #5B3450)",
      },
      {
        name: "Color Data Category 8",
        value: "var(--color-data-category-8, #A898FF)",
      },
      {
        name: "Color Data Category 8 Background",
        value: "var(--color-data-category-8-background, #4F4D64)",
      },
      {
        name: "Color Data Category 9",
        value: "var(--color-data-category-9, #0077C5)",
      },
      {
        name: "Color Data Category 9 Background",
        value: "var(--color-data-category-9-background, #2E4658)",
      },
      {
        name: "Color Data Category 10",
        value: "var(--color-data-category-10, #15EFE9)",
      },
      {
        name: "Color Data Category 10 Background",
        value: "var(--color-data-category-10-background, #325E5F)",
      },
      {
        name: "Color Data Negative",
        value: "var(--color-data-negative, #FF8979)",
      },
      {
        name: "Color Data Negative 100",
        value: "var(--color-data-negative-100, #B80000)",
      },
      {
        name: "Color Data Negative 200",
        value: "var(--color-data-negative-200, #D52B1E)",
      },
      {
        name: "Color Data Negative 300",
        value: "var(--color-data-negative-300, #E43834)",
      },
      {
        name: "Color Data Negative 400",
        value: "var(--color-data-negative-400, #F25A52)",
      },
      {
        name: "Color Data Neutral",
        value: "var(--color-data-neutral, #6B6C72)",
      },
      {
        name: "Color Data Neutral 100",
        value: "var(--color-data-neutral-100, #8D9096)",
      },
      {
        name: "Color Data Neutral 200",
        value: "var(--color-data-neutral-200, #BABEC5)",
      },
      {
        name: "Color Data Neutral 300",
        value: "var(--color-data-neutral-300, #E3E5E8)",
      },
      {
        name: "Color Data Neutral 400",
        value: "var(--color-data-neutral-400, #F4F5F8)",
      },
      {
        name: "Color Data Positive",
        value: "var(--color-data-positive, #53B700)",
      },
      {
        name: "Color Data Positive 100",
        value: "var(--color-data-positive-100, #108000)",
      },
      {
        name: "Color Data Positive 200",
        value: "var(--color-data-positive-200, #2CA01C)",
      },
      {
        name: "Color Data Positive 300",
        value: "var(--color-data-positive-300, #53B700)",
      },
      {
        name: "Color Data Positive 400",
        value: "var(--color-data-positive-400, #7FD000)",
      },
      {
        name: "Color Data Primary",
        value: "var(--color-data-primary, #53B700)",
      },
      {
        name: "Color Data Primary 100",
        value: "var(--color-data-primary-100, #108000)",
      },
      {
        name: "Color Data Primary 200",
        value: "var(--color-data-primary-200, #2CA01C)",
      },
      {
        name: "Color Data Primary 300",
        value: "var(--color-data-primary-300, #53B700)",
      },
      {
        name: "Color Data Primary 400",
        value: "var(--color-data-primary-400, #7FD000)",
      },
      {
        name: "Color Data Secondary",
        value: "var(--color-data-secondary, #00C1BF)",
      },
      {
        name: "Color Data Secondary 100",
        value: "var(--color-data-secondary-100, #008481)",
      },
      {
        name: "Color Data Secondary 200",
        value: "var(--color-data-secondary-200, #00A6A4)",
      },
      {
        name: "Color Data Secondary 300",
        value: "var(--color-data-secondary-300, #00C1BF)",
      },
      {
        name: "Color Data Secondary 400",
        value: "var(--color-data-secondary-400, #00D7D7)",
      },
      {
        name: "Color Data Tertiary",
        value: "var(--color-data-tertiary, #9457FA)",
      },
      {
        name: "Color Data Tertiary 100",
        value: "var(--color-data-tertiary-100, #6436AF)",
      },
      {
        name: "Color Data Tertiary 200",
        value: "var(--color-data-tertiary-200, #7A3DD8)",
      },
      {
        name: "Color Data Tertiary 300",
        value: "var(--color-data-tertiary-300, #9457FA)",
      },
      {
        name: "Color Data Tertiary 400",
        value: "var(--color-data-tertiary-400, #A898FF)",
      },
      {
        name: "Color Divider Inverse",
        value: "var(--color-divider-inverse, #282828)",
      },
      {
        name: "Color Divider Primary",
        value: "var(--color-divider-primary, #6B6C72)",
      },
      {
        name: "Color Divider Secondary",
        value: "var(--color-divider-secondary, #6B6C72)",
      },
      {
        name: "Color Divider Tertiary",
        value: "var(--color-divider-tertiary, #6B6C72)",
      },
      {
        name: "Color Focus Indicator",
        value: "var(--color-focus-indicator, #34BFFF)",
      },
      {
        name: "Color Icon Accent",
        value: "var(--color-icon-accent, #34BFFF)",
      },
      {
        name: "Color Icon Complementary",
        value: "var(--color-icon-complementary, #FFFFFF)",
      },
      {
        name: "Color Icon Disabled",
        value: "var(--color-icon-disabled, #6B6C72)",
      },
      {
        name: "Color Icon Inverse",
        value: "var(--color-icon-inverse, #282828)",
      },
      {
        name: "Color Icon Primary",
        value: "var(--color-icon-primary, #ECEEF1)",
      },
      {
        name: "Color Icon Secondary",
        value: "var(--color-icon-secondary, #BABEC5)",
      },
      {
        name: "Color Input Background Disabled",
        value: "var(--color-input-background-disabled, #6B6C72)",
      },
      {
        name: "Color Input Background Error",
        value: "var(--color-input-background-error, rgba(213, 43, 30, 0.1))",
      },
      {
        name: "Color Input Background Error Focus",
        value:
          "var(--color-input-background-error-focus, rgba(213, 43, 30, 0.07))",
      },
      {
        name: "Color Input Background Primary",
        value: "var(--color-input-background-primary, #282828)",
      },
      {
        name: "Color Input Background Primary Active",
        value: "var(--color-input-background-primary-active, #282828)",
      },
      {
        name: "Color Input Background Primary Focus",
        value: "var(--color-input-background-primary-focus, #282828)",
      },
      {
        name: "Color Input Background Primary Hover",
        value: "var(--color-input-background-primary-hover, #282828)",
      },
      {
        name: "Color Input Background Primary Selected",
        value: "var(--color-input-background-primary-selected, #53B700)",
      },
      {
        name: "Color Input Background Readonly",
        value: "var(--color-input-background-readonly, #393A3D)",
      },
      {
        name: "Color Input Background Secondary",
        value: "var(--color-input-background-secondary, #282828)",
      },
      {
        name: "Color Input Background Secondary Active",
        value: "var(--color-input-background-secondary-active, #282828)",
      },
      {
        name: "Color Input Background Secondary Focus",
        value: "var(--color-input-background-secondary-focus, #282828)",
      },
      {
        name: "Color Input Background Secondary Hover",
        value: "var(--color-input-background-secondary-hover, #282828)",
      },
      {
        name: "Color Input Background Tertiary",
        value: "var(--color-input-background-tertiary, #282828)",
      },
      {
        name: "Color Input Background Tertiary Active",
        value: "var(--color-input-background-tertiary-active, #282828)",
      },
      {
        name: "Color Input Background Tertiary Focus",
        value: "var(--color-input-background-tertiary-focus, #282828)",
      },
      {
        name: "Color Input Background Tertiary Hover",
        value: "var(--color-input-background-tertiary-hover, #282828)",
      },
      {
        name: "Color Input Background Warning",
        value: "var(--color-input-background-warning, rgba(255, 187, 0, 0.25))",
      },
      {
        name: "Color Input Background Warning Focus",
        value:
          "var(--color-input-background-warning-focus, rgba(255, 187, 0, 0.07))",
      },
      {
        name: "Color Input Border Disabled",
        value: "var(--color-input-border-disabled, #BABEC5)",
      },
      {
        name: "Color Input Border Error",
        value: "var(--color-input-border-error, #D52B1E)",
      },
      {
        name: "Color Input Border Primary",
        value: "var(--color-input-border-primary, #8D9096)",
      },
      {
        name: "Color Input Border Primary Active",
        value: "var(--color-input-border-primary-active, #53B700)",
      },
      {
        name: "Color Input Border Primary Focus",
        value: "var(--color-input-border-primary-focus, #53B700)",
      },
      {
        name: "Color Input Border Primary Hover",
        value: "var(--color-input-border-primary-hover, #53B700)",
      },
      {
        name: "Color Input Border Primary Selected",
        value: "var(--color-input-border-primary-selected, #53B700)",
      },
      {
        name: "Color Input Border Readonly",
        value: "var(--color-input-border-readonly, rgba(141, 144, 150, 0.5))",
      },
      {
        name: "Color Input Border Secondary",
        value: "var(--color-input-border-secondary, #8D9096)",
      },
      {
        name: "Color Input Border Secondary Active",
        value: "var(--color-input-border-secondary-active, #53B700)",
      },
      {
        name: "Color Input Border Secondary Focus",
        value: "var(--color-input-border-secondary-focus, #53B700)",
      },
      {
        name: "Color Input Border Secondary Hover",
        value: "var(--color-input-border-secondary-hover, #53B700)",
      },
      {
        name: "Color Input Border Tertiary",
        value: "var(--color-input-border-tertiary, #8D9096)",
      },
      {
        name: "Color Input Border Tertiary Active",
        value: "var(--color-input-border-tertiary-active, #53B700)",
      },
      {
        name: "Color Input Border Tertiary Focus",
        value: "var(--color-input-border-tertiary-focus, #53B700)",
      },
      {
        name: "Color Input Border Tertiary Hover",
        value: "var(--color-input-border-tertiary-hover, #53B700)",
      },
      {
        name: "Color Input Border Warning",
        value: "var(--color-input-border-warning, #FFAC61)",
      },
      {
        name: "Color Input Label",
        value: "var(--color-input-label, #BABEC5)",
      },
      {
        name: "Color Input Placeholder",
        value: "var(--color-input-placeholder, #8D9096)",
      },
      {
        name: "Color Input Placeholder Disabled",
        value: "var(--color-input-placeholder-disabled, #6B6C72)",
      },
      {
        name: "Color Link Background",
        value: "var(--color-link-background, rgba(5, 83, 147, 0.5))",
      },
      {
        name: "Color Link Background Visited",
        value: "var(--color-link-background-visited, rgba(78, 43, 143, 0.5))",
      },
      {
        name: "Color Link Text",
        value: "var(--color-link-text, #34BFFF)",
      },
      {
        name: "Color Link Text Active",
        value: "var(--color-link-text-active, #71D2FF)",
      },
      {
        name: "Color Link Text Complementary",
        value: "var(--color-link-text-complementary, #34BFFF)",
      },
      {
        name: "Color Link Text Complementary Visited",
        value: "var(--color-link-text-complementary-visited, #A898FF)",
      },
      {
        name: "Color Link Text Focus",
        value: "var(--color-link-text-focus, #34BFFF)",
      },
      {
        name: "Color Link Text Hover",
        value: "var(--color-link-text-hover, #5DCCFF)",
      },
      {
        name: "Color Link Text Visited",
        value: "var(--color-link-text-visited, #A898FF)",
      },
      {
        name: "Color Message Background Received",
        value: "var(--color-message-background-received, #393A3D)",
      },
      {
        name: "Color Message Background Sent",
        value: "var(--color-message-background-sent, #53B700)",
      },
      {
        name: "Color Message Text Received",
        value: "var(--color-message-text-received, #ECEEF1)",
      },
      {
        name: "Color Message Text Sent",
        value: "var(--color-message-text-sent, #282828)",
      },
      {
        name: "Color Overlay",
        value: "var(--color-overlay, rgba(0, 0, 0, 0.4))",
      },
      {
        name: "Color Page Background Accent",
        value: "var(--color-page-background-accent, #393A3D)",
      },
      {
        name: "Color Page Background Primary",
        value: "var(--color-page-background-primary, #282828)",
      },
      {
        name: "Color Page Background Secondary",
        value: "var(--color-page-background-secondary, #393A3D)",
      },
      {
        name: "Color Page Background Tertiary",
        value: "var(--color-page-background-tertiary, #393A3D)",
      },
      {
        name: "Color Progress Indicator",
        value: "var(--color-progress-indicator, #53B700)",
      },
      {
        name: "Color Selection Indicator",
        value: "var(--color-selection-indicator, #53B700)",
      },
      {
        name: "Color Shadow",
        value: "var(--color-shadow, #000000)",
      },
      {
        name: "Color Text Accent",
        value: "var(--color-text-accent, #FFFFFF)",
      },
      {
        name: "Color Text Complementary",
        value: "var(--color-text-complementary, #FFFFFF)",
      },
      {
        name: "Color Text Disabled",
        value: "var(--color-text-disabled, #8D9096)",
      },
      {
        name: "Color Text Highlight",
        value: "var(--color-text-highlight, #17497F)",
      },
      {
        name: "Color Text Inverse",
        value: "var(--color-text-inverse, #282828)",
      },
      {
        name: "Color Text Primary",
        value: "var(--color-text-primary, #ECEEF1)",
      },
      {
        name: "Color Text Quaternary",
        value: "var(--color-text-quaternary, #BABEC5)",
      },
      {
        name: "Color Text Secondary",
        value: "var(--color-text-secondary, #BABEC5)",
      },
      {
        name: "Color Text Tertiary",
        value: "var(--color-text-tertiary, #BABEC5)",
      },
      {
        name: "Color Track Primary",
        value: "var(--color-track-primary, #8D9096)",
      },
      {
        name: "Color Track Secondary",
        value: "var(--color-track-secondary, #6B6C72)",
      },
      {
        name: "Color Ui Attention",
        value: "var(--color-ui-attention, #FFAC61)",
      },
      {
        name: "Color Ui Attention Active",
        value: "var(--color-ui-attention-active, #FFC590)",
      },
      {
        name: "Color Ui Attention Hover",
        value: "var(--color-ui-attention-hover, #FFBD81)",
      },
      {
        name: "Color Ui Beta",
        value: "var(--color-ui-beta, #15EFE9)",
      },
      {
        name: "Color Ui Completed",
        value: "var(--color-ui-completed, #53B700)",
      },
      {
        name: "Color Ui Discover",
        value: "var(--color-ui-discover, #34BFFF)",
      },
      {
        name: "Color Ui Info",
        value: "var(--color-ui-info, #34BFFF)",
      },
      {
        name: "Color Ui Negative",
        value: "var(--color-ui-negative, #FF8979)",
      },
      {
        name: "Color Ui Negative Active",
        value: "var(--color-ui-negative-active, #FFACA1)",
      },
      {
        name: "Color Ui Negative Hover",
        value: "var(--color-ui-negative-hover, #FFA194)",
      },
      {
        name: "Color Ui Neutral",
        value: "var(--color-ui-neutral, #BABEC5)",
      },
      {
        name: "Color Ui Neutral Active",
        value: "var(--color-ui-neutral-active, #E3E5E8)",
      },
      {
        name: "Color Ui Neutral Focus",
        value: "var(--color-ui-neutral-focus, #BABEC5)",
      },
      {
        name: "Color Ui Neutral Hover",
        value: "var(--color-ui-neutral-hover, #D4D7DC)",
      },
      {
        name: "Color Ui Neutral Selected",
        value: "var(--color-ui-neutral-selected, #E3E5E8)",
      },
      {
        name: "Color Ui New",
        value: "var(--color-ui-new, #FF88EC)",
      },
      {
        name: "Color Ui Positive",
        value: "var(--color-ui-positive, #53B700)",
      },
      {
        name: "Color Ui Primary",
        value: "var(--color-ui-primary, #53B700)",
      },
      {
        name: "Color Ui Primary Active",
        value: "var(--color-ui-primary-active, #87CD4C)",
      },
      {
        name: "Color Ui Primary Focus",
        value: "var(--color-ui-primary-focus, #53B700)",
      },
      {
        name: "Color Ui Primary Hover",
        value: "var(--color-ui-primary-hover, #75C533)",
      },
      {
        name: "Color Ui Secondary",
        value: "var(--color-ui-secondary, #53B700)",
      },
      {
        name: "Color Ui Secondary Active",
        value: "var(--color-ui-secondary-active, #87CD4C)",
      },
      {
        name: "Color Ui Secondary Focus",
        value: "var(--color-ui-secondary-focus, #53B700)",
      },
      {
        name: "Color Ui Secondary Hover",
        value: "var(--color-ui-secondary-hover, #75C533)",
      },
      {
        name: "Color Ui Tertiary",
        value: "var(--color-ui-tertiary, #393A3D)",
      },
      {
        name: "Color Ui Tertiary Active",
        value: "var(--color-ui-tertiary-active, #000000)",
      },
      {
        name: "Color Ui Tertiary Focus",
        value: "var(--color-ui-tertiary-focus, #393A3D)",
      },
      {
        name: "Color Ui Tertiary Hover",
        value: "var(--color-ui-tertiary-hover, #2B2B2E)",
      },
    ],
    spacing: [
      {
        name: "Space Column Gap Large",
        value: "var(--space-column-gap-large, 24px)",
      },
      {
        name: "Space Column Gap Medium",
        value: "var(--space-column-gap-medium, 20px)",
      },
      {
        name: "Space Column Gap Small",
        value: "var(--space-column-gap-small, 16px)",
      },
      {
        name: "Space Column Gap X Large",
        value: "var(--space-column-gap-x-large, 40px)",
      },
      {
        name: "Space Column Gap X Small",
        value: "var(--space-column-gap-x-small, 8px)",
      },
      {
        name: "Space Column Gap Xx Small",
        value: "var(--space-column-gap-xx-small, 4px)",
      },
      {
        name: "Space Component Gap Large",
        value: "var(--space-component-gap-large, 12px)",
      },
      {
        name: "Space Component Gap Medium",
        value: "var(--space-component-gap-medium, 8px)",
      },
      {
        name: "Space Component Gap Small",
        value: "var(--space-component-gap-small, 4px)",
      },
      {
        name: "Space Component Gap X Small",
        value: "var(--space-component-gap-x-small, 2px)",
      },
      {
        name: "Space Component Inline Padding Large",
        value: "var(--space-component-inline-padding-large, 10px)",
      },
      {
        name: "Space Component Inline Padding Medium",
        value: "var(--space-component-inline-padding-medium, 8px)",
      },
      {
        name: "Space Component Inline Padding Small",
        value: "var(--space-component-inline-padding-small, 6px)",
      },
      {
        name: "Space Component Inline Padding X Large",
        value: "var(--space-component-inline-padding-x-large, 12px)",
      },
      {
        name: "Space Component Inline Padding X Small",
        value: "var(--space-component-inline-padding-x-small, 4px)",
      },
      {
        name: "Space Component Inline Padding Xx Large",
        value: "var(--space-component-inline-padding-xx-large, 16px)",
      },
      {
        name: "Space Component Inline Padding Xx Small",
        value: "var(--space-component-inline-padding-xx-small, 2px)",
      },
      {
        name: "Space Component Inline Padding Xxx Large",
        value: "var(--space-component-inline-padding-xxx-large, 20px)",
      },
      {
        name: "Space Component Inline Padding Xxx Small",
        value: "var(--space-component-inline-padding-xxx-small, 0)",
      },
      {
        name: "Space Component Stack Padding Large",
        value: "var(--space-component-stack-padding-large, 8px)",
      },
      {
        name: "Space Component Stack Padding Medium",
        value: "var(--space-component-stack-padding-medium, 6px)",
      },
      {
        name: "Space Component Stack Padding Small",
        value: "var(--space-component-stack-padding-small, 4px)",
      },
      {
        name: "Space Component Stack Padding X Large",
        value: "var(--space-component-stack-padding-x-large, 10px)",
      },
      {
        name: "Space Component Stack Padding X Small",
        value: "var(--space-component-stack-padding-x-small, 2px)",
      },
      {
        name: "Space Component Stack Padding Xx Small",
        value: "var(--space-component-stack-padding-xx-small, 0)",
      },
      {
        name: "Space Container Padding Large",
        value: "var(--space-container-padding-large, 24px)",
      },
      {
        name: "Space Container Padding Medium",
        value: "var(--space-container-padding-medium, 20px)",
      },
      {
        name: "Space Container Padding Small",
        value: "var(--space-container-padding-small, 16px)",
      },
      {
        name: "Space Container Padding X Large",
        value: "var(--space-container-padding-x-large, 32px)",
      },
      {
        name: "Space Container Padding X Small",
        value: "var(--space-container-padding-x-small, 12px)",
      },
      {
        name: "Space Container Padding Xx Large",
        value: "var(--space-container-padding-xx-large, 40px)",
      },
      {
        name: "Space Container Padding Xx Small",
        value: "var(--space-container-padding-xx-small, 8px)",
      },
      {
        name: "Space Container Padding Xxx Large",
        value: "var(--space-container-padding-xxx-large, 60px)",
      },
      {
        name: "Space Container Padding Xxx Small",
        value: "var(--space-container-padding-xxx-small, 4px)",
      },
      {
        name: "Space Large",
        value: "var(--space-large, 24px)",
      },
      {
        name: "Space Medium",
        value: "var(--space-medium, 16px)",
      },
      {
        name: "Space Page Inline",
        value: "var(--space-page-inline, 20px)",
      },
      {
        name: "Space Row Gap Large",
        value: "var(--space-row-gap-large, 40px)",
      },
      {
        name: "Space Row Gap Medium",
        value: "var(--space-row-gap-medium, 20px)",
      },
      {
        name: "Space Row Gap Small",
        value: "var(--space-row-gap-small, 12px)",
      },
      {
        name: "Space Row Gap X Large",
        value: "var(--space-row-gap-x-large, 60px)",
      },
      {
        name: "Space Row Gap X Small",
        value: "var(--space-row-gap-x-small, 8px)",
      },
      {
        name: "Space Small",
        value: "var(--space-small, 12px)",
      },
      {
        name: "Space X Large",
        value: "var(--space-x-large, 40px)",
      },
      {
        name: "Space X Small",
        value: "var(--space-x-small, 8px)",
      },
    ],
    fontFamily: [
      {
        name: "Family Body",
        value:
          "var(--font-family-body, Avenir Next forINTUIT, Avenir, Helvetica, Arial, sans-serif)",
      },
      {
        name: "Family Component",
        value:
          "var(--font-family-component, Avenir Next forINTUIT, Avenir, Helvetica, Arial, sans-serif)",
      },
      {
        name: "Family Display",
        value:
          "var(--font-family-display, Avenir Next forINTUIT, Avenir, Helvetica, Arial, sans-serif)",
      },
      {
        name: "Family Heading",
        value:
          "var(--font-family-heading, Avenir Next forINTUIT, Avenir, Helvetica, Arial, sans-serif)",
      },
    ],
    fontSize: [
      {
        name: "Size Action Large",
        value: "var(--font-size-action-large, 20px)",
      },
      {
        name: "Size Action Medium",
        value: "var(--font-size-action-medium, 16px)",
      },
      {
        name: "Size Action Small",
        value: "var(--font-size-action-small, 14px)",
      },
      {
        name: "Size Action X Small",
        value: "var(--font-size-action-x-small, 12px)",
      },
      {
        name: "Size Body 1",
        value: "var(--font-size-body-1, 16px)",
      },
      {
        name: "Size Body 2",
        value: "var(--font-size-body-2, 16px)",
      },
      {
        name: "Size Body 3",
        value: "var(--font-size-body-3, 14px)",
      },
      {
        name: "Size Body 4",
        value: "var(--font-size-body-4, 12px)",
      },
      {
        name: "Size Component Large",
        value: "var(--font-size-component-large, 20px)",
      },
      {
        name: "Size Component Medium",
        value: "var(--font-size-component-medium, 16px)",
      },
      {
        name: "Size Component Small",
        value: "var(--font-size-component-small, 14px)",
      },
      {
        name: "Size Component X Large",
        value: "var(--font-size-component-x-large, 24px)",
      },
      {
        name: "Size Component X Small",
        value: "var(--font-size-component-x-small, 12px)",
      },
      {
        name: "Size Display 1",
        value: "var(--font-size-display-1, 60px)",
      },
      {
        name: "Size Display 2",
        value: "var(--font-size-display-2, 48px)",
      },
      {
        name: "Size Display 3",
        value: "var(--font-size-display-3, 40px)",
      },
      {
        name: "Size Display 4",
        value: "var(--font-size-display-4, 34px)",
      },
      {
        name: "Size Heading 1",
        value: "var(--font-size-heading-1, 34px)",
      },
      {
        name: "Size Heading 2",
        value: "var(--font-size-heading-2, 28px)",
      },
      {
        name: "Size Heading 3",
        value: "var(--font-size-heading-3, 28px)",
      },
      {
        name: "Size Heading 4",
        value: "var(--font-size-heading-4, 24px)",
      },
      {
        name: "Size Heading 5",
        value: "var(--font-size-heading-5, 20px)",
      },
      {
        name: "Size Heading 6",
        value: "var(--font-size-heading-6, 20px)",
      },
      {
        name: "Size Input Label",
        value: "var(--font-size-input-label, 14px)",
      },
      {
        name: "Size Input Text",
        value: "var(--font-size-input-text, 16px)",
      },
      {
        name: "Size Action Large",
        value: "var(--font-size-action-large, 20px)",
      },
      {
        name: "Size Action Medium",
        value: "var(--font-size-action-medium, 16px)",
      },
      {
        name: "Size Action Small",
        value: "var(--font-size-action-small, 14px)",
      },
      {
        name: "Size Action X Small",
        value: "var(--font-size-action-x-small, 12px)",
      },
      {
        name: "Size Body 1",
        value: "var(--font-size-body-1, 16px)",
      },
      {
        name: "Size Body 2",
        value: "var(--font-size-body-2, 16px)",
      },
      {
        name: "Size Body 3",
        value: "var(--font-size-body-3, 14px)",
      },
      {
        name: "Size Body 4",
        value: "var(--font-size-body-4, 12px)",
      },
      {
        name: "Size Component Large",
        value: "var(--font-size-component-large, 20px)",
      },
      {
        name: "Size Component Medium",
        value: "var(--font-size-component-medium, 16px)",
      },
      {
        name: "Size Component Small",
        value: "var(--font-size-component-small, 14px)",
      },
      {
        name: "Size Component X Large",
        value: "var(--font-size-component-x-large, 24px)",
      },
      {
        name: "Size Component X Small",
        value: "var(--font-size-component-x-small, 12px)",
      },
      {
        name: "Size Display 1",
        value: "var(--font-size-display-1, 72px)",
      },
      {
        name: "Size Display 2",
        value: "var(--font-size-display-2, 60px)",
      },
      {
        name: "Size Display 3",
        value: "var(--font-size-display-3, 48px)",
      },
      {
        name: "Size Display 4",
        value: "var(--font-size-display-4, 40px)",
      },
      {
        name: "Size Heading 1",
        value: "var(--font-size-heading-1, 40px)",
      },
      {
        name: "Size Heading 2",
        value: "var(--font-size-heading-2, 34px)",
      },
      {
        name: "Size Heading 3",
        value: "var(--font-size-heading-3, 28px)",
      },
      {
        name: "Size Heading 4",
        value: "var(--font-size-heading-4, 24px)",
      },
      {
        name: "Size Heading 5",
        value: "var(--font-size-heading-5, 24px)",
      },
      {
        name: "Size Heading 6",
        value: "var(--font-size-heading-6, 20px)",
      },
      {
        name: "Size Input Label",
        value: "var(--font-size-input-label, 14px)",
      },
      {
        name: "Size Input Text",
        value: "var(--font-size-input-text, 16px)",
      },
      {
        name: "Size Action Large",
        value: "var(--font-size-action-large, 20px)",
      },
      {
        name: "Size Action Medium",
        value: "var(--font-size-action-medium, 16px)",
      },
      {
        name: "Size Action Small",
        value: "var(--font-size-action-small, 14px)",
      },
      {
        name: "Size Action X Small",
        value: "var(--font-size-action-x-small, 12px)",
      },
      {
        name: "Size Body 1",
        value: "var(--font-size-body-1, 20px)",
      },
      {
        name: "Size Body 2",
        value: "var(--font-size-body-2, 16px)",
      },
      {
        name: "Size Body 3",
        value: "var(--font-size-body-3, 14px)",
      },
      {
        name: "Size Body 4",
        value: "var(--font-size-body-4, 12px)",
      },
      {
        name: "Size Component Large",
        value: "var(--font-size-component-large, 20px)",
      },
      {
        name: "Size Component Medium",
        value: "var(--font-size-component-medium, 16px)",
      },
      {
        name: "Size Component Small",
        value: "var(--font-size-component-small, 14px)",
      },
      {
        name: "Size Component X Large",
        value: "var(--font-size-component-x-large, 24px)",
      },
      {
        name: "Size Component X Small",
        value: "var(--font-size-component-x-small, 12px)",
      },
      {
        name: "Size Display 1",
        value: "var(--font-size-display-1, 84px)",
      },
      {
        name: "Size Display 2",
        value: "var(--font-size-display-2, 72px)",
      },
      {
        name: "Size Display 3",
        value: "var(--font-size-display-3, 60px)",
      },
      {
        name: "Size Display 4",
        value: "var(--font-size-display-4, 48px)",
      },
      {
        name: "Size Heading 1",
        value: "var(--font-size-heading-1, 48px)",
      },
      {
        name: "Size Heading 2",
        value: "var(--font-size-heading-2, 40px)",
      },
      {
        name: "Size Heading 3",
        value: "var(--font-size-heading-3, 34px)",
      },
      {
        name: "Size Heading 4",
        value: "var(--font-size-heading-4, 28px)",
      },
      {
        name: "Size Heading 5",
        value: "var(--font-size-heading-5, 24px)",
      },
      {
        name: "Size Heading 6",
        value: "var(--font-size-heading-6, 20px)",
      },
      {
        name: "Size Input Label",
        value: "var(--font-size-input-label, 14px)",
      },
      {
        name: "Size Input Text",
        value: "var(--font-size-input-text, 16px)",
      },
    ],
    duration: [
      {
        name: "Duration Appear Emphasize Fast",
        value: "var(--duration-appear-emphasize-fast, 500ms)",
      },
      {
        name: "Duration Appear Emphasize Moderate",
        value: "var(--duration-appear-emphasize-moderate, 700ms)",
      },
      {
        name: "Duration Appear Emphasize Slow",
        value: "var(--duration-appear-emphasize-slow, 800ms)",
      },
      {
        name: "Duration Appear Fast",
        value: "var(--duration-appear-fast, 250ms)",
      },
      {
        name: "Duration Appear Moderate",
        value: "var(--duration-appear-moderate, 300ms)",
      },
      {
        name: "Duration Appear Slow",
        value: "var(--duration-appear-slow, 350ms)",
      },
      {
        name: "Duration Disappear Emphasize Fast",
        value: "var(--duration-disappear-emphasize-fast, 500ms)",
      },
      {
        name: "Duration Disappear Emphasize Moderate",
        value: "var(--duration-disappear-emphasize-moderate, 700ms)",
      },
      {
        name: "Duration Disappear Emphasize Slow",
        value: "var(--duration-disappear-emphasize-slow, 800ms)",
      },
      {
        name: "Duration Disappear Fast",
        value: "var(--duration-disappear-fast, 200ms)",
      },
      {
        name: "Duration Disappear Moderate",
        value: "var(--duration-disappear-moderate, 250ms)",
      },
      {
        name: "Duration Disappear Slow",
        value: "var(--duration-disappear-slow, 300ms)",
      },
      {
        name: "Duration Fade Fast",
        value: "var(--duration-fade-fast, 150ms)",
      },
      {
        name: "Duration Fade Moderate",
        value: "var(--duration-fade-moderate, 200ms)",
      },
      {
        name: "Duration Fade Slow",
        value: "var(--duration-fade-slow, 250ms)",
      },
      {
        name: "Duration Progress Fast",
        value: "var(--duration-progress-fast, 500ms)",
      },
      {
        name: "Duration Progress Moderate",
        value: "var(--duration-progress-moderate, 1000ms)",
      },
      {
        name: "Duration Progress Slow",
        value: "var(--duration-progress-slow, 1500ms)",
      },
      {
        name: "Duration Progress Slowest",
        value: "var(--duration-progress-slowest, 2000ms)",
      },
      {
        name: "Duration Transform Emphasize Fast",
        value: "var(--duration-transform-emphasize-fast, 500ms)",
      },
      {
        name: "Duration Transform Emphasize Moderate",
        value: "var(--duration-transform-emphasize-moderate, 700ms)",
      },
      {
        name: "Duration Transform Emphasize Slow",
        value: "var(--duration-transform-emphasize-slow, 800ms)",
      },
      {
        name: "Duration Transform Fast",
        value: "var(--duration-transform-fast, 350ms)",
      },
      {
        name: "Duration Transform Moderate",
        value: "var(--duration-transform-moderate, 400ms)",
      },
      {
        name: "Duration Transform Slow",
        value: "var(--duration-transform-slow, 450ms)",
      },
    ],
    easing: [
      {
        name: "Ease Appear",
        value: "var(--ease-appear, cubic-bezier(0, 0, 0.25, 1))",
      },
      {
        name: "Ease Appear Emphasize",
        value: "var(--ease-appear-emphasize, cubic-bezier(0.15, 1.4, 0.25, 1))",
      },
      {
        name: "Ease Disappear",
        value: "var(--ease-disappear, cubic-bezier(0.35, 0, 1, 1))",
      },
      {
        name: "Ease Disappear Emphasize",
        value:
          "var(--ease-disappear-emphasize, cubic-bezier(0.4, 0, 0.6, -0.4))",
      },
      {
        name: "Ease Fade",
        value: "var(--ease-fade, cubic-bezier(0.35, 0, 0.5, 1))",
      },
      {
        name: "Ease Transform",
        value: "var(--ease-transform, cubic-bezier(0.35, 0, 0.25, 1))",
      },
      {
        name: "Ease Transform Emphasize",
        value:
          "var(--ease-transform-emphasize, cubic-bezier(0.35, 1.4, 0.25, 1))",
      },
    ],
    elevation: [
      {
        name: "Elevation Level 0",
        value: "var(--elevation-level-0, 0 0 0 0)",
      },
      {
        name: "Elevation Level 1",
        value: "var(--elevation-level-1, 0 1px 4px 0)",
      },
      {
        name: "Elevation Level 2",
        value: "var(--elevation-level-2, 0 2px 8px 0)",
      },
      {
        name: "Elevation Level 3",
        value: "var(--elevation-level-3, 0 4px 16px 0)",
      },
      {
        name: "Elevation Level 4",
        value: "var(--elevation-level-4, 0 6px 24px 0)",
      },
    ],
    radius: [
      {
        name: "Radius Action",
        value: "var(--radius-action, 4px)",
      },
      {
        name: "Radius Full",
        value: "var(--radius-full, 9999px)",
      },
      {
        name: "Radius Large",
        value: "var(--radius-large, 8px)",
      },
      {
        name: "Radius Medium",
        value: "var(--radius-medium, 6px)",
      },
      {
        name: "Radius None",
        value: "var(--radius-none, 0)",
      },
      {
        name: "Radius Small",
        value: "var(--radius-small, 4px)",
      },
      {
        name: "Radius X Large",
        value: "var(--radius-x-large, 12px)",
      },
      {
        name: "Radius X Small",
        value: "var(--radius-x-small, 2px)",
      },
    ],
    opacity: [
      {
        name: "Opacity Disabled",
        value: "var(--opacity-disabled, 0.5)",
      },
      {
        name: "Opacity Shadow",
        value: "var(--opacity-shadow, 0.2)",
      },
    ],
  },
});
