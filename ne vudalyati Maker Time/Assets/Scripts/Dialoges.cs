using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class Dialoges : MonoBehaviour
{
    [SerializeField] GameObject panel;
    [SerializeField] Sprite pers;
 
    

    

    void Update()
    {
        
    }


    public void OpenDialog(Sprite img, string name = "невідомий", string text= "мовчить", float t = 5f)
    {
        StartCoroutine(Dialog(img, name, text, t));
    }

    IEnumerator Dialog(Sprite img, string name = "невідомий", string text = "мовчить", float t = 1f)
    {
        panel.SetActive(true);
        panel.transform.GetChild(0).GetComponent<TextMeshProUGUI>().SetText(text);
        panel.transform.GetChild(1).GetComponent<TextMeshProUGUI>().SetText(name);
        panel.transform.GetChild(2).GetComponent<Image>().sprite = img;
        yield return new WaitForSeconds(t);
        panel.SetActive(false);
    }
    
}
