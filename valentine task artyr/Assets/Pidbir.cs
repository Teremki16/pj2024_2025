using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Pidbir : MonoBehaviour
{
    
        private void OnTriggerEnter2D(Collider2D collision)
        {
            if (collision.gameObject.tag == "Player")
            {
                FindObjectOfType<MoveMent>().Heart++;
                Destroy(gameObject);
            }
        }
    }
