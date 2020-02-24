export const data = {
    '': {
        color: 'yellow',
        path: '/',
        img: `<svg xmlns="http://www.w3.org/2000/svg" width="40.503" height="31.496" viewBox="0 0 40.503 31.496">
    <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M19.714,10.425,6.75,21.1V32.625A1.125,1.125,0,0,0,7.875,33.75l7.879-.02A1.125,1.125,0,0,0,16.874,32.6v-6.73A1.125,1.125,0,0,1,18,24.75h4.5a1.125,1.125,0,0,1,1.125,1.125V32.6a1.125,1.125,0,0,0,1.125,1.129l7.876.022a1.125,1.125,0,0,0,1.125-1.125V21.094L20.789,10.425A.857.857,0,0,0,19.714,10.425Zm20.477,7.257-5.878-4.845V3.1a.844.844,0,0,0-.844-.844H29.531a.844.844,0,0,0-.844.844V8.2l-6.3-5.179a3.375,3.375,0,0,0-4.289,0L.305,17.681A.844.844,0,0,0,.193,18.87l1.793,2.18a.844.844,0,0,0,1.189.115L19.714,7.542a.857.857,0,0,1,1.076,0l16.54,13.622a.844.844,0,0,0,1.188-.112l1.793-2.18a.844.844,0,0,0-.12-1.19Z" transform="translate(0.001 -2.254)" fill="#f36c21"/>
  </svg>
  `,
    },
    perfil: {
        color: 'blue',
        path: '/perfil',
        img: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
    <path id="Icon_awesome-user-alt" data-name="Icon awesome-user-alt" d="M18,20.25A10.125,10.125,0,1,0,7.875,10.125,10.128,10.128,0,0,0,18,20.25Zm9,2.25H23.126a12.24,12.24,0,0,1-10.252,0H9a9,9,0,0,0-9,9v1.125A3.376,3.376,0,0,0,3.375,36h29.25A3.376,3.376,0,0,0,36,32.625V31.5A9,9,0,0,0,27,22.5Z" fill="#f36c21"/>
  </svg>
  `,
    },
    aliados: {
        color: 'orange',
        path: '/aliados',
        img: `<svg xmlns="http://www.w3.org/2000/svg" width="40.5" height="36" viewBox="0 0 40.5 36">
    <path id="Icon_awesome-shopping-cart" data-name="Icon awesome-shopping-cart" d="M37.133,21.186,40.457,6.561A1.688,1.688,0,0,0,38.812,4.5H11.194L10.55,1.349A1.687,1.687,0,0,0,8.9,0H1.688A1.687,1.687,0,0,0,0,1.688V2.813A1.687,1.687,0,0,0,1.688,4.5H6.6L11.54,28.648a3.938,3.938,0,1,0,4.714.6H31a3.936,3.936,0,1,0,4.472-.732l.388-1.707a1.688,1.688,0,0,0-1.646-2.061H15.336l-.46-2.25H35.488A1.687,1.687,0,0,0,37.133,21.186Z" fill="#f36c21"/>
  </svg>
  `,
    },

    patrocinados: {
        color: 'green',
        path: '/patrocinados',
        img: `<svg xmlns="http://www.w3.org/2000/svg" width="36.001" height="31.501" viewBox="0 0 36.001 31.501">
    <path id="Icon_awesome-heart" data-name="Icon awesome-heart" d="M32.505,4.4a9.615,9.615,0,0,0-13.12.956L18,6.785,16.615,5.358A9.615,9.615,0,0,0,3.495,4.4,10.1,10.1,0,0,0,2.8,19.02L16.4,33.068a2.2,2.2,0,0,0,3.185,0L33.195,19.02A10.09,10.09,0,0,0,32.505,4.4Z" transform="translate(0.001 -2.248)" fill="#f36c21"/>
  </svg>
  `,
    },
};

export const BACK = 'http://jorgeasarria.com/ws';

export const awaitJson = async (path) => {
    const raw = await fetch(`${BACK}/${path}`);
    const res = await raw.json();
    return res;
};
