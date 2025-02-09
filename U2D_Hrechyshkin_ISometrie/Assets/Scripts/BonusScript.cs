using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BonusScript : MonoBehaviour
{
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.tag == "Player")
        {
            FindObjectOfType<SpawnBonusScript>().score++;
            Destroy(gameObject);

        }
        if(collision.gameObject.tag == "Collider")
        {
            Destroy(gameObject);
        }
    }
}
