export const FooterSections = ({ section }) => {
	return (
		<div className='h-10 group'>
			<a href='#'>{section}</a>
			<div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
		</div>
	);
};
