export default function MyLocationMap() {
    return (
        <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!4v1769871660902!6m8!1m7!1sV4JcwA6SiqutZR9hFw2LnA!2m2!1d6.067737554243093!2d80.18729814523876!3f210.69!4f4.6299999999999955!5f0" width="400" height="400"
                style={
                    {border: 0}
                }
                allowFullScreen
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                title="My Location"></iframe>
        </div>
    );
}
