<template>
    <div>
        <svg :style="{'width': width, 'height': height}" viewBox="0 0 172 172" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_15_4)">
                <path d="M4 40C4 17.9086 21.9086 0 44 0H128C150.091 0 168 17.9086 168 40V124C168 146.091 150.091 164 128 164H44C21.9086 164 4 146.091 4 124V40Z" fill="#3661EB"/>
            </g>
            <path d="M116.213 84.623C116.213 92.6634 114.667 99.3854 111.574 104.789C108.514 110.16 104.071 114.213 98.2441 116.947C92.4173 119.649 85.4023 121 77.1992 121H56.9844V49.6133H79.3965C86.8835 49.6133 93.3776 50.9479 98.8789 53.6172C104.38 56.2539 108.645 60.1764 111.672 65.3848C114.699 70.5605 116.213 76.9733 116.213 84.623ZM100.49 85.0137C100.49 79.7402 99.709 75.4108 98.1465 72.0254C96.6165 68.6074 94.3379 66.0846 91.3105 64.457C88.3158 62.8294 84.6048 62.0156 80.1777 62.0156H72.1211V108.5H78.6152C86.0046 108.5 91.4896 106.531 95.0703 102.592C98.6836 98.653 100.49 92.7936 100.49 85.0137Z" fill="white"/>
            <defs>
                <filter id="filter0_d_15_4" x="0" y="0" width="172" height="172" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_4"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_4" result="shape"/>
                </filter>
            </defs>
        </svg>
    </div>
</template>

<script setup>
const { width, height } = defineProps(['width', 'height'])
</script>