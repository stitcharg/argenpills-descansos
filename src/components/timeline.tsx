import { useEffect, useState } from "react";
import { Chrono } from "react-chrono";
import { FullToEmpty, Full, Empty, Filling, Half } from "./containers";
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';

const Timeline = () => {
	const { t, i18n } = useTranslation();

	const [items, setItems] = useState(getTimelineItems());

	useEffect(() => {
		setItems(getTimelineItems());
	}, [i18n.language]);

	// Function to get initial items
	function getTimelineItems() {
		return [
			{
				title: t("timeline.0.title"),
				cardTitle: t("timeline.0.cardTitle"),
				timelineContent: <div>
					{parse(t('timeline.0.timelineContent'))}
					<Full caption={parse(t('timeline.0.tankCaption')).toString()}></Full>
				</div>
			},
			{
				title: t("timeline.2.title"),
				cardTitle: t("timeline.2.cardTitle"),
				timelineContent: <div>
					{parse(t('timeline.2.timelineContent'))}
					<FullToEmpty caption={parse(t('timeline.2.tankCaption')).toString()}></FullToEmpty>
				</div>
			},
			{
				title: t("timeline.8.title"),
				cardTitle: t("timeline.8.cardTitle"),
				cardSubtitle: t("timeline.8.cardSubtitle"),
				timelineContent: <div>
					{parse(t('timeline.8.timelineContent'))}
					<Empty caption={parse(t('timeline.8.tankCaption')).toString()}></Empty>
				</div>
			},
			{
				title: t("timeline.48.title"),
				cardTitle: t("timeline.48.cardTitle"),
				cardSubtitle: t("timeline.48.cardSubtitle"),
				timelineContent: <div>
					{parse(t('timeline.48.timelineContent'))}
					<Empty caption={parse(t('timeline.48.tankCaption')).toString()}></Empty>
				</div>
			},
			{
				title: t("timeline.96.title"),
				cardTitle: t("timeline.96.cardTitle"),
				cardSubtitle: t("timeline.96.cardSubtitle"),
				timelineContent: <div>
					{parse(t('timeline.96.timelineContent'))}
					<Empty caption={parse(t('timeline.96.tankCaption')).toString()}></Empty>
				</div>
			},
			{
				title: t("timeline.480.title"),
				cardTitle: t("timeline.480.cardTitle"),
				cardSubtitle: t("timeline.480.cardSubtitle"),
				timelineContent: <div>
					{parse(t('timeline.480.timelineContent'))}
					<Filling caption={parse(t('timeline.480.tankCaption')).toString()}></Filling>
				</div>
			},
			{
				title: t("timeline.720.title"),
				cardTitle: t("timeline.720.cardTitle"),
				cardSubtitle: t("timeline.720.cardSubtitle"),
				timelineContent: <div>
					{parse(t('timeline.720.timelineContent'))}
					<Half caption={parse(t('timeline.720.tankCaption')).toString()}></Half>
				</div>
			},
			{
				title: t("timeline.1440.title"),
				cardTitle: t("timeline.1440.cardTitle"),
				cardSubtitle: t("timeline.1440.cardSubtitle"),
				timelineContent: <div>
					{parse(t('timeline.1440.timelineContent'))}
					<Full caption={parse(t('timeline.1440.tankCaption')).toString()}></Full>
				</div>
			},
			{
				title: t("timeline.2160.title"),
				cardTitle: t("timeline.2160.cardTitle"),
				cardSubtitle: t("timeline.2160.cardSubtitle"),
				timelineContent: <div>
					{parse(t('timeline.2160.timelineContent'))}
					<Full caption={parse(t('timeline.2160.tankCaption')).toString()}></Full>
				</div>
			},
		];
	}

	const key = items.map(item => item.title);

	return (
		<Chrono
			key={key}
			items={items}
			mode="VERTICAL"
			hideControls="true"
			useReadMore="true"
			cardHeight="200"
			theme={{
				primary: "#3a86ff",
				secondary: "#8338ec",
				cardBgColor: "#EEE",
				titleColor: "#ff006e",
				titleColorActive: "#fff",
			}}
			fontSizes={{
				cardSubtitle: '1.2rem',
				cardTitle: '1.5rem',
				title: '2rem',
			}}
		/>
	);
};

export default Timeline;
