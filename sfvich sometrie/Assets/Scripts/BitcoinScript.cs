using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BitcoinScript : MonoBehaviour
{
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.tag == "Player")
        {
            FindObjectOfType<SpawnBonusScript>().score++;
            GameObject.Find("SoundManager").GetComponent<SoundManager>().JevelS();
            Destroy(gameObject);
        }
        if(collision.gameObject.tag == "Colider")
        {
            Destroy(gameObject);
        }
    } 
}
