import { useState } from "react";

export default function PosterSection({ date, festivalData }) {
  const [festivals, setFestivals] = useState({
    oneImp: festivalData.filter((fest) => fest.importance === 1),
    twoImp: festivalData.filter((fest) => fest.importance === 2),
    threeImp: festivalData.filter((fest) => fest.importance === 3),
    fourImp: festivalData.filter((fest) => fest.importance === 4),
  });

  return (
    <div className="lineup-container">
      <div className="flex flex-col space-y-5 w-full">
        <h3 className="p-2 rounded-md text-white text-[20px] m-0 bg-[#111111a1] text-center">
          {date}
        </h3>
        <div>
          <p className="giant">Süper Büyük Önemli Gruplar:</p>
          {festivals.oneImp.map((fest, index) => {
            return (
              <p className="giant">
                {index + 1}:{fest.name}
              </p>
            );
          })}
        </div>
        <div>
          <p className="big">Biraz Daha Az Önemli Gruplar:</p>
          {festivals.twoImp.map((fest, index) => {
            return (
              <p className="big">
                {index + 1}:{fest.name}
              </p>
            );
          })}
        </div>
        <div>
          <p className="medium">Orta Dereceli Gruplar:</p>
          {festivals.threeImp.map((fest, index) => {
            return (
              <p className="medium">
                {index + 1}:{fest.name}
              </p>
            );
          })}
        </div>
        <div>
          <p className="small">O kadar da önemli olmayan bir gruplar:</p>
          {festivals.fourImp.map((fest, index) => {
            return (
              <p className="small">
                {index + 1}:{fest.name}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/*Challenge
	
	Müzikseverlerin bu yılki Festival'de hangi gün hangi grupların çalacağını bilmesi gerekiyor. Sizin göreviniz bu PosterSection'ı aşağıdaki gibi bu işi yapabilecek hale getirmek: 
	
		1. Aşağıdaki kodlanmış paragraflar, yinelemeli olarak oluşturulan paragraflarla değiştirilmelidir - festivalData array'indeki her bir grup için, bileşene bir prop olarak aktarılan günde (1, 2 veya 3 Haziran) çalan bir grup. Belirli bir günün bölümünde görünmesi gereken *sadece* gruplar o gün çalan gruplardan oluşmalıdır.
		   
		2. Gruplar önem sırasına göre sıralanmalıdır (festivalData array'indeki nesnelerin "importance" özelliği). 1'den 4'e kadar sıralanırlar, 1 en önemli ve 4 en az önemli olandır. İki grup aynı öneme sahipse, array'de daha önce görünen PosterBölümü'nde ilk olarak görünmelidir. 
		   
		3. Bir grubun önem değerinin 1, 2, 3 veya 4 olmasına bağlı olarak, paragraf elementi sırasıyla "giant", "big", "medium" veya "small" class adını almalıdır. 
		
		4. Bu görevleri doğru bir şekilde tamamlarsanız, 1 Haziran bölümünde yalnızca 1 Haziran 'da çalan grupları görmelisiniz; en önemlileri üstte büyük puntolarla, daha az önemlileri ise altta daha küçük puntolarla yer almalıdır. Aynı şey 2 ve 3 Haziran için de geçerlidir. Sayfanın altında otomatik olarak bir footer da görünmelidir. 
		   
 */
