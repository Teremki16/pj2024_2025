using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class SuzhetkaScript : MonoBehaviour
{
    [SerializeField] public string S_textt;
    TextMeshProUGUI textBox;
    // Start is called before the first frame update
    void Start()
    {
        textBox = GameObject.Find("S_text").GetComponent<TextMeshProUGUI>();
    }

    // Update is called once per frame
    void Update()
    {
       
    }
    public void OnCollisionEnter(Collision collision)
    {
        Debug.Log(collision);
        if (collision.gameObject.CompareTag("Player"))
        {
            textBox.text = S_textt;
        }
    }
    public void OnTriggerEnter2D(Collider2D collision)
    {
        Debug.Log(collision);
        if (collision.gameObject.CompareTag("Player"))
        {
            textBox.text = S_textt;
        }
    }
}
