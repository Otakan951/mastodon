import logo from 'mastodon/../images/logo.svg';

export const WordmarkLogo: React.FC = () => (
  <img src="https://hota.hirachon.otakan.jp/system/media_attachments/files/109/631/390/341/444/688/original/3f7f590630408713.png" height="32px" />
);

export const SymbolLogo: React.FC = () => (
  <img src={logo} alt='Mastodon' className='logo logo--icon' />
);
