import PropTypes from "prop-types"

import styles from "./MNIcon.module.css"

const propTypes = {
    size: PropTypes.number
}
const defaultProps = {
    size: 55
}

const MNIcon = ({ size }) => (
    <svg
        className={styles["icon-style"]}
        width={size}
        height={size}
        viewBox="0 0 512.000000 512.000000"
    >
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
            <path d="M1825 4360 c-80 -6 -143 -18 -233 -44 -68 -20 -125 -36 -128 -36 -2
                0 -4 -11 -4 -24 0 -13 -16 -43 -35 -66 -19 -23 -35 -48 -35 -55 0 -7 -11 -20
                -25 -29 -13 -9 -48 -55 -77 -102 -29 -48 -67 -100 -84 -117 -17 -16 -36 -45
                -42 -66 -6 -20 -43 -80 -81 -134 -38 -54 -75 -114 -81 -135 -7 -20 -34 -68
                -60 -107 -236 -348 -423 -751 -545 -1176 -20 -68 -42 -131 -50 -139 -8 -9 -15
                -33 -15 -52 0 -20 -6 -41 -14 -47 -7 -6 -16 -29 -20 -50 -3 -21 -26 -108 -50
                -192 -62 -212 -67 -237 -76 -379 -9 -139 -11 -134 61 -226 40 -50 57 -64 94
                -74 61 -17 105 -8 205 42 102 52 124 83 141 203 6 43 17 95 24 114 7 20 17 58
                20 86 4 27 13 62 21 78 8 15 12 31 9 36 -2 5 6 39 20 75 14 37 25 79 25 94 0
                15 6 36 13 47 8 11 27 54 42 95 15 41 37 93 48 115 11 22 21 61 22 86 2 46 35
                144 62 184 11 17 13 10 13 -56 0 -218 131 -376 360 -435 89 -23 308 -15 398
                14 34 11 62 19 62 18 0 -1 -14 -42 -30 -92 -17 -49 -46 -147 -65 -218 -19 -71
                -38 -132 -43 -135 -12 -9 -72 -329 -72 -388 0 -48 3 -54 43 -88 54 -47 166
                -95 222 -95 l43 0 -5 -39 c-3 -22 -3 -51 1 -65 8 -31 36 -35 36 -5 0 19 4 20
                35 15 31 -6 35 -4 35 14 0 14 6 20 24 20 51 0 84 12 95 36 7 15 19 24 34 24
                19 0 67 25 204 106 31 18 33 23 33 74 0 30 9 89 20 130 11 41 24 120 30 175
                18 161 56 269 118 337 17 19 23 34 20 53 -4 19 2 34 23 56 36 38 43 79 35 185
                -4 52 -3 84 3 84 5 0 12 24 16 53 9 66 34 169 46 183 5 6 18 40 29 76 11 35
                28 74 39 86 17 21 24 40 51 149 23 93 30 53 30 -184 0 -342 27 -663 71 -852
                13 -56 16 -88 9 -96 -6 -8 0 -33 20 -81 16 -38 42 -115 58 -171 34 -117 74
                -176 195 -289 l74 -69 94 -13 c120 -16 186 -16 191 0 3 8 20 11 47 9 58 -4
                126 42 208 140 35 43 82 92 103 109 36 28 43 43 74 143 19 62 47 159 61 216
                14 57 42 149 62 205 21 61 38 132 43 181 5 44 21 118 38 165 16 47 29 99 28
                117 -2 22 2 33 13 36 12 3 20 26 30 81 17 107 57 237 96 324 25 52 32 81 29
                105 -4 19 1 44 10 62 9 17 16 41 16 54 0 13 11 36 24 52 14 16 43 86 66 156
                45 137 61 174 88 201 10 10 32 53 51 97 18 44 58 123 89 175 54 90 121 239
                122 269 0 7 13 28 29 46 41 47 77 163 44 142 -9 -6 -48 -80 -58 -112 -6 -17
                -9 -13 -19 20 -7 24 -8 43 -3 46 12 9 -10 49 -27 49 -15 0 -49 34 -41 41 2 3
                0 21 -6 41 -9 35 -11 36 -38 27 -21 -7 -45 -6 -89 5 -65 17 -110 20 -129 8 -6
                -4 -21 -44 -32 -89 -30 -117 -37 -131 -87 -185 -24 -26 -44 -55 -44 -64 0 -27
                -41 -91 -66 -105 -15 -8 -28 -28 -35 -53 -6 -23 -37 -81 -69 -131 -66 -101
                -90 -152 -90 -191 0 -26 0 -27 20 -9 11 10 36 51 55 91 19 41 37 74 39 74 8 0
                -54 -133 -70 -151 -8 -8 -14 -21 -14 -27 0 -7 -7 -12 -15 -12 -8 0 -17 -10
                -19 -22 -3 -13 -7 -34 -10 -48 -9 -50 -37 -115 -56 -132 -11 -9 -20 -27 -20
                -40 0 -26 -33 -93 -61 -124 -10 -11 -19 -31 -19 -43 0 -13 -16 -60 -36 -104
                -48 -111 -84 -215 -84 -247 0 -25 -16 -50 -32 -50 -4 0 -6 12 -3 28 13 85 14
                112 5 112 -16 0 -38 -52 -49 -120 -13 -76 -39 -151 -57 -165 -18 -14 -58 -161
                -94 -343 -31 -157 -79 -346 -87 -338 -15 15 -44 179 -40 228 3 31 1 58 -3 60
                -13 5 -22 491 -11 521 6 16 7 38 1 57 -6 21 -3 68 9 148 11 64 19 133 19 152
                0 19 20 101 45 182 55 176 87 323 132 608 67 428 77 519 66 627 0 7 -19 16
                -42 19 -22 4 -43 13 -46 21 -13 33 -66 48 -178 49 -60 2 -164 6 -231 10 -133
                8 -176 0 -214 -41 -13 -14 -32 -25 -42 -25 -11 0 -23 -11 -29 -27 -6 -16 -21
                -39 -34 -53 -13 -14 -30 -39 -37 -56 -13 -30 -114 -143 -324 -363 -55 -58
                -122 -138 -147 -177 -26 -39 -76 -103 -112 -142 -37 -39 -98 -115 -136 -169
                -80 -113 -373 -493 -376 -489 -4 4 68 317 89 386 10 36 33 96 51 133 23 51 28
                70 18 76 -9 6 -8 11 3 20 9 7 18 29 22 50 3 20 12 46 20 58 8 12 9 23 4 25 -5
                2 8 55 31 118 22 63 56 159 74 213 49 140 74 241 81 338 l6 84 -41 46 c-70 80
                -84 83 -306 69z m1922 -2077 c-3 -10 -5 -4 -5 12 0 17 2 24 5 18 2 -7 2 -21 0
                -30z m27 -35 c-18 -32 -27 -39 -35 -27 -4 7 -2 18 4 25 15 17 41 18 31 2z"
            />
        </g>
    </svg>
)
MNIcon.propTypes = propTypes
MNIcon.defaultProps = defaultProps

export default MNIcon